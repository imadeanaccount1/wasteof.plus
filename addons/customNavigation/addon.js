if (!document.getElementById('customChatLink')) {
  chrome.storage.local.get(['customNavigation' + 'Options'], function (result) {
    if (result['customNavigation' + 'Options'].chatEnabled) {
      const elem = document.querySelector('nav > .container > div.flex > ul > li')
      const clone = elem.cloneNode(true)
      clone.id = 'customChatLink'
      clone.querySelector('a').classList.remove('text-white')
      clone.querySelector('a').classList.remove('nuxt-link-exact-active')
      clone.querySelector('a').classList.remove('nuxt-link-active')

      clone.querySelector('a').classList.add('text-primary-300')
      clone.querySelector('a').classList.add('dark:text-gray-400')

      clone.querySelector('a > span').innerText = 'chat'
      clone.querySelector('a').href = '/chat'

      clone.querySelectorAll('a > span')[1].children[0].remove()
      clone.querySelectorAll('a > span')[1].insertAdjacentHTML('beforeend', `
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/></svg>
  `)

      const exploreElem = document.querySelectorAll('nav > .container > div.flex > ul > li')[1]

      exploreElem.after(clone)
    }
  })
}
