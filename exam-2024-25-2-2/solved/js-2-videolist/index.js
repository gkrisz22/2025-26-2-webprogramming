const videoTable = document.querySelector('#video-table')
const videoTableBody = document.querySelector('#video-table tbody')
const viewInput = document.querySelector('#amount')
const btnAdd = document.querySelector('#btn-add')
const btnSub = document.querySelector('#btn-sub')
const sumSpan = document.querySelector('#sum')

// c+d: sum selected rows, or all if nothing selected
function updateSum() {
    const selected = data.filter(v => v.selected)
    const toSum = selected.length > 0 ? selected : data
    const total = toSum.reduce((sum, v) => sum + v.views, 0)
    sumSpan.textContent = Math.round(total * 100) / 100
}

// a: render all rows
function renderTable() {
    videoTableBody.innerHTML = data
        .map(video => `
            <tr data-id="${video.id}">
                <td>${video.year}</td>
                <td>${video.title}</td>
                <td>${video.views} million</td>
            </tr>
        `)
        .join('')
    updateSum()
}

renderTable()

// b: toggle row selection on click
videoTableBody.addEventListener('click', (event) => {
    const tr = event.target.closest('tr')
    if (!tr) return
    tr.classList.toggle('selected')
    const video = data.find(v => v.id === tr.dataset.id)
    if (video) video.selected = tr.classList.contains('selected')
    updateSum()
})

// e: add / subtract views for selected rows
function adjustViews(delta) {
    const amount = parseFloat(viewInput.value)
    if (isNaN(amount)) return
    const selectedRows = videoTableBody.querySelectorAll('tr.selected')
    if (selectedRows.length === 0) return
    selectedRows.forEach(tr => {
        const video = data.find(v => v.id === tr.dataset.id)
        if (!video) return
        video.views = Math.max(0, video.views + delta * amount)
        tr.cells[2].textContent = `${Math.round(video.views * 100) / 100} million`
    })
    updateSum()
}

btnAdd.addEventListener('click', () => adjustViews(+1))
btnSub.addEventListener('click', () => adjustViews(-1))

// f: sort by column header click (descending)
videoTable.querySelector('thead').addEventListener('click', (event) => {
    const th = event.target.closest('th[data-sort]')
    if (!th) return
    const key = th.dataset.sort
    data.sort((a, b) => {
        if (key === 'title') return b.title.localeCompare(a.title)
        return b[key] - a[key]
    })
    data.forEach(v => v.selected = false)
    renderTable()
})
