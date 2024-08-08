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
        let result

        if (Boolean(residue)) {
            result = String(num).split('.')

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

        } else {
            result = parseInt(num)
        }       

        return result
    }

    percent(value = 0, total = 1e1, round = 0) {
        let result = this.round(total / 1e2 * value, round)

        return result
    }
    
    part(value = 0, total = 1e1, round = 0) {
        let result = this.round(value / total * 1e2, round)

        return result
    }

    random(list = [], shift = 0) {
        let slide = this.percent(shift, list.length)
        let index = slide + Math.round(Math.random() * list.length)
        
        while (index > list.length - 1) {
            index = slide + Math.round(Math.random() * list.length)
        }

        let result = list[index]

        return result
    }

    calories(weight = 7e1, distance = 5e2, pulse = 11e1, round = 0) {
        let minutes = distance * 5
        let result = weight * minutes * 14e-3 * (12e-2 * (pulse - 7))
    
        result = this.round(result, round)

        return result
    }

    debounce(func, timestamp = 5e2) {
        let timeout 

        return function() {
            clearInterval(timeout)

            timeout = setTimeout(() => func.apply(this, arguments), timestamp)
        }
    }

    cash(change = 1e3, coins = []) {
        let values = []
        let index = coins.length - 1

        while (change !== 0 || index > 0) {
            let coin = coins[index]
            let result = Math.floor(change / coin)

            if (result !== 0) {
                values = [...values, {coin, amount: result}]

                change -= result * coin
            }

            index--
        }

        return {values, change}
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