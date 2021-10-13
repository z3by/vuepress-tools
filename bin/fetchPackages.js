const path = require('path')
const fs = require('fs/promises')
const { performance } = require('perf_hooks')
const axios = require('axios')
const yaml = require('js-yaml')

const BASE_DIR = path.join(__dirname, '..')
const CONTENT_PATH = path.join(BASE_DIR, 'content')
const PACKAGE_TYPES = ['themes', 'plugins']

GITHUB_USER = process.env.GITHUB_USER
GITHUB_TOKEN = process.env.GITHUB_TOKEN

class User {
  constructor(
    username = null,
    email = null,
    name = null,
    url = null,
    avatar = null
  ) {
    this.username = username
    this.email = email
    this.name = name
    this.url = url
    this.avatar = avatar
  }
}

class Package {
  constructor(
    name,
    description,
    version,
    date,
    npm,
    author = new User(),
    publisher = new User(),
    category,
    stars = 0,
    watchers = 0,
    score = 0.0,
    repository = '',
    keywords = null,
    maintainers = null,
    unstable = false,
    deprecated = false,
    downloads = null,
    license = null,
    homepage = null,
    bugs = null
  ) {
    this.name = name
    this.description = description
    this.version = version
    this.date = date
    this.npm = npm
    this.author = author
    this.publisher = publisher
    this.category = category
    this.stars = stars
    this.watchers = watchers
    this.score = score
    this.repository = repository
    this.keywords = keywords
    this.maintainers = maintainers
    this.unstable = unstable
    this.deprecated = deprecated
    this.downloads = downloads
    this.license = license
    this.homepage = homepage
    this.bugs = bugs
  }
}

// DONE
const getCleanPackageName = (obj) => {
  // eslint-disable-next-line prefer-regex-literals
  const target = new RegExp('/', 'g')
  return obj.name.replace(target, '-')
}

// DONE
const isExcluded = (obj) => {
  const excludedCases = [
    !obj.name.includes(obj.category),
    obj.repository === '',
    !obj.repository.includes('github'),
    obj.deprecated,
  ]
  return excludedCases.some((x) => x)
}

// DONE
const getRepo = async (package) => {
  try {
    // https://api.github.com/repos/ryanschen/markdown-vuepress-loader
    const url = package.repository.replace('github.com', 'api.github.com/repos')
    const data = await axios.get(url, {
      headers: { Accept: 'application/vnd.github.v3+json' },
      auth: {
        username: GITHUB_USER,
        password: GITHUB_TOKEN,
      },
    })
    const githubData = data.data
    if (!package.author.username) {
      package.author.username = githubData.owner.login
    }
    package.author.avatar = githubData.owner.avatar_url
    package.watchers = githubData.watchers_count
    package.stars = githubData.stargazers_count
    githubData.license
      ? (package.license = githubData.license.name)
      : (package.license = null)
    return package
  } catch (err) {}
}

// Done
const getFrontmatter = (package) => {
  try {
    const yml = yaml.dump(package, {
      styles: {
        '!!null': 'canonical', // dump null as ~
      },
      sortKeys: true, // sort object keys
    })
    const finalFrontmatterContent = ['---', yml, '---\n\n'].join('\n')
    return finalFrontmatterContent
  } catch (err) {}
}
// Done
const getReadme = async (package) => {
  const url = `${package.repository.replace(
    'github.com',
    'api.github.com/repos'
  )}/readme`
  try {
    const data = await axios.get(url, {
      headers: { Accept: 'application/vnd.github.v3+json' },
      auth: {
        username: GITHUB_USER,
        password: GITHUB_TOKEN,
      },
    })
    const encodedData = data.data.content
    const decodedData = Buffer.from(encodedData, 'base64').toString()
    return decodedData
  } catch (err) {}
}

// Done
const save = async (package, relativePath) => {
  try {
    const pkgName = getCleanPackageName(package)
    const path = `${BASE_DIR}/${relativePath}/${pkgName}`
    const content = getFrontmatter(package) + (await getReadme(package))

    fs.writeFile(`${path}.md`, content, function (err) {
      if (err) throw err
    })
  } catch (err) {}
}

// DONE
const constructPackage = (data, category = '') => {
  const package = data.package

  const publisher = new User(package.publisher)
  const author = new User(package.author)
  let unstable, deprecated
  data.flags ? (unstable = data.flags.unstable) : (unstable = false)
  data.flags ? (deprecated = data.flags.deprecated) : (deprecated = false)

  const pkg = new Package(
    package.name,
    package.description,
    package.version,
    package.date,
    package.links.npm,
    author,
    publisher,
    category,
    null,
    null,
    data.score.final,
    package.links.repository,
    package.keywords,
    package.maintainers,
    unstable,
    deprecated,
    package.links.downloads,
    package.links.license,
    package.links.homepage,
    package.links.bugs
  )

  return pkg
}

// DONE
const removeCurrentPackages = async () => {
  try {
    await fs.rmdir(CONTENT_PATH, { recursive: true })

    for (const pkgType of PACKAGE_TYPES) {
      const pkgDir = path.join(CONTENT_PATH, pkgType)
      await fs.mkdir(pkgDir, {
        recursive: true,
      })
    }
  } catch (err) {}
}

// DONE
const getTotalPackages = async (query, baseUrl) => {
  try {
    const from = 0
    const apiUrl = `${baseUrl}?from=${from}&q=${query}&size=1`
    const r = await axios.get(apiUrl)
    const totalNumberOfPackages = r.data.total
    return totalNumberOfPackages
  } catch (err) {}
}

// DONE
const fetchPackages = async (query) => {
  try {
    let allPackages = []
    const baseUrl = 'https://api.npms.io/v2/search'
    const totalNumberOfPackages = await getTotalPackages(query, baseUrl)
    for (let i = 0; i < totalNumberOfPackages; i = i + 250) {
      const apiUrl = `${baseUrl}?from=${i}&q=${query}&size=250`
      const fetchedData = await axios.get(apiUrl)
      allPackages = [...allPackages, ...fetchedData.data.results]
    }
    return allPackages
  } catch (err) {}
}

const writePackages = async (pkgType) => {
  try {
    for (const package of await fetchPackages(`vuepress-${pkgType}`)) {
      let pkg = constructPackage(package, pkgType)
      if (!isExcluded(pkg)) {
        pkg = await getRepo(pkg)
        await save(pkg, `content/${pkgType}s`)
      }
    }
  } catch (err) {}
}
function millisToMinutes(millis) {
  const minutes = Math.floor(millis / 60000)
  const seconds = ((millis % 60000) / 1000).toFixed(0)
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}

const run = async () => {
  const t0 = performance.now()
  await removeCurrentPackages()
  await writePackages('theme')
  await writePackages('plugin')
  const t1 = performance.now()
  console.info('the code takes ' + millisToMinutes(t1 - t0) + ' minutes.')
}
run()
