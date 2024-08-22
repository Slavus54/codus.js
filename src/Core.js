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

    card(text = '', isConvert = true) {
        let result = ''

        if (isConvert) {

            text.split('').slice(0, 16).map((el, idx) => {
                if ((idx + 1) % 4 === 0) {
                    result += `${el}-`
                } else {
                    result += el
                }
            })

            result = result.slice(0, result.length - 1)

        } else {

            result = text.split('-').join('').slice(0, 16)
        }

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

    mutateObject(object = {}, properties = [], values = []) {
        properties.map((property, idx) => {
            object[property] = values[idx]
        })

        return object
    }

    splice(list = [], borders = [], values = [], check = null) {
        let result = list.slice(0, borders[0]) 
    
        for (let i = borders[0]; i < borders[1]; i++) {
            let item = list[i]
            let value = values[i - borders[0]]
            let valid = eval(`${item} ${check}`)

            result = [...result, valid ? value : item]
        }

        result = [...result, ...list.slice(borders[1])]
        
        return result
    }

    is(obj1 = {}, obj2 = {}, round = 0) {
        let keys1 = Object.keys(obj1)
        let keys2 = Object.keys(obj2)
        let length = keys1.length >= keys2.length ? keys1.length : keys2.length
        let result = 0
        
        for (let i = 0; i < length; i++) {
            if (keys1[i] === keys2[i]) {
                result++
            }
        }

        result = this.part(result, length, round)

        return result
    }

    depth(list = [], position = 1) {
        let result = 0

        for (let i = 0; i < list.length; i++) {
            let value = list[i]
            let counter = 0

            while (Array.isArray(value)) {
                value = value[Boolean(counter) ? 0 : position - 1]
                counter++
            }
           
            if (counter > result) {
                result = counter
            }
        }

        return result
    }

    objectFilter(obj = {}, type = 'string') {
        let result = Object.fromEntries(Object.entries(obj).filter(([_, value]) => typeof value === type))

        return result
    }

    filterArrayByDigit(list = [], index = 1, value = 1) {
        let result = []

        list.map(el => {
            if (Number(String(el).split('').reverse()[index]) === value) {
                result = [...result, el]
            }
        })

        return result
    }

    reverseObject(obj = {}) {
        let result = Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]))    

        return result
    }

    textSubstring(text = '', substring = '') {
        let result = 0
        
        substring = substring.trim().toLocaleLowerCase()

        text.split(' ').map(el => {
            if (el.toLocaleLowerCase().includes(substring)) {
                result++
            }
        })

        return result
    }

    binary(num = null, isConvert = true) {
        if (num === null) {
            return num
        }

        let result

        if (isConvert) {

            result = ''

            while (num > 0) {
                let residue = num % 2
                let isEven = residue === 0
                
                if (!isEven) {
                    num -= residue
                }

                result += isEven ? '0' : '1' 
                num /= 2
            }

            result = result.split('').reverse().join('')

        } else {

            result = 0

            num.split('').reverse().map((el, idx) => {
                result += Number(el) * 2**idx
            })

            result = Number(result)
        }

        return result
    }

    getObjectProperty(obj = {}, properties = []) {
        let result = obj[properties[0]]

        for (let i = 1; i < properties.length; i++) {
            result = result[properties[i]]
        }

        return result
    }

    sum(list = [], isEven = null, min = 0, max = 1e6) {
        let result = 0

        list = list.filter(el => el >= min && el <= max)

        if (isEven !== null) {
            list = list.filter(el => el % 2 === 0 && isEven || el % 2 !== 0 && !isEven)
        }
        
        result = list.reduce((acc, cur) => acc + cur)

        return result
    }

    go(url = '') {
        window.open(url)
    }

    copy(text = '') {
        window.navigator.clipboard.writeText(text)
    }
}

module.exports = {Codus}