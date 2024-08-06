class Codus {
    rad(value = 1) {
        return Math.PI * value / 18e1
    }

    haversine(lat1, long1, lat2, long2) {
        let r = 6378.1

        let latDifference = this.rad(lat2 - lat1)
        let longDifference = this.rad(long2 - long1)

        let side = Math.sin(latDifference / 2)**2 + Math.cos(this.rad(lat1)) * Math.cos(this.rad(lat2)) * Math.sin(longDifference / 2)**2
        let result = Math.atan2(Math.sqrt(side), Math.sqrt(1 - side)) * 2

        return result * r 
    }

    cords(e) {
        let value = e !== undefined
        
        value = value ? value : Number(value)

        return {
            lat: value ? e.lngLat[1] : value,
            long: value ? e.lngLat[0] : value
        }
    }

    search(original = '', toCompare = '', percent = 5e1, startFromBeginning = false) {
        let template = new RegExp(toCompare, 'i')
        let sizes = [original.length, toCompare.length]

        let isValidSize = Math.round(sizes[1] / sizes[0] * 1e2) >= percent
        let isIncludeText = startFromBeginning ? original.toLocaleLowerCase().split(toCompare.toLowerCase())[0].length === 0 : template.test(original)
    
        return isValidSize && isIncludeText
    }

    short(text = '', words = 3) {
        let length = typeof text === 'string' ? text.split(' ').length : 0
        let result = length <= words ? text : text.split(' ').slice(0, words).join(' ') + '...'

        return result
    }

    round(num = 1e1, residue = 0) {
        let result = Boolean(residue) ? String(num).split('.') : parseInt(num)
        let left = result[1].split('').map(el => Number(el)).reverse()
        let toCompare = left[left.length - residue] 
        let pick = 0

        for (let i = 0; i < left.length - (residue + 1); i++) {
            let current = Boolean(i) ? pick : left[i]
            let next = left[i + 1]
            
            if (current && next) {
                pick = current > 4 ? next + 1 : next
            }
        }

        result = result[0] + '.' + left.slice(left.length - (residue - 1)).reverse().join('') + (pick > 4 ? toCompare + 1 : toCompare)

        return result
    }

    go(url = '') {
        window.open(url)
    }

    copy(text = '') {
        window.navigator.clipboard.writeText(text)
    }

    paste() {
        return window.navigator.clipboard.readText()
    }
}

module.exports = {Codus}