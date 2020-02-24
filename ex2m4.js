var x = 0
var y = -1
var z = 4

var nums = [x, y, z]
var sortedNums = nums.sort().reverse()
var sortedNumsString = ""

for (let i = 0; i < nums.length; i++) {
    if (i !== nums.length - 1) {
        sortedNumsString += nums[i].toString() + ", "
    } else {
        sortedNumsString += nums[i].toString()
    }
}
window.alert(sortedNumsString)