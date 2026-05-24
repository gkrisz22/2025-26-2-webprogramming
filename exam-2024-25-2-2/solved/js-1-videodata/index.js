const taskA = document.querySelector('#taskA')
const taskB = document.querySelector('#taskB')
const taskC = document.querySelector('#taskC')
const taskD = document.querySelector('#taskD')
const taskE = document.querySelector('#taskE')

// a: Video before year 2000
const oldVideo = data.find(video => video.year < 2000)
taskA.textContent = oldVideo.title

// b: Videos with more than 100M views
const popular = data.filter(video => video.views > 100)
taskB.innerHTML = popular
    .map(video => `<div>${video.title} (${video.views}M)</div>`)
    .join('')

// c: Titles containing "Love"
const loveCount = data.filter(video => video.title.includes('Love')).length
taskC.textContent = loveCount

// d: Average views of 2024 videos
const videos2024 = data.filter(video => video.year === 2024)
const totalViews = videos2024.reduce((sum, video) => sum + video.views, 0)
const average = totalViews / videos2024.length
taskD.textContent = average.toFixed(2)

// e: Any song title contains a digit?
const hasDigit = data.some(video => {
    const songTitle = video.title.split(' - ')[1]
    return /\d/.test(songTitle)
})
taskE.textContent = hasDigit ? 'Yes' : 'No'
