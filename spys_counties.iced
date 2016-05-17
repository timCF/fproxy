page = require('webpage').create()
exit = (code) ->
	phantom.onError = () -> null
	setTimeout((() -> phantom.exit(code)), 5000)
	if page then page.close()
setTimeout((() -> exit(1)), 100000)
page.onInitialized = () ->
	page.onCallback = () ->
		arr = page.evaluate(() ->
				[].slice.call(document.getElementsByClassName('spy4'))
					.map((a) -> a.textContent)
					.filter((a) -> a)
					.filter((a) => a.match(/^[A-Z][A-Z]$/)))
		console.log(JSON.stringify(arr))
		exit(0)
	page.evaluate(() -> document.addEventListener('DOMContentLoaded', (() -> window.callPhantom()), false))
page.open('http://spys.ru/proxys/')
