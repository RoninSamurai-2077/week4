Math.floor(math.random() * 101);   
// x0=seed; a=multiplier; b=increment; m=modulus; n=desired array length; 
const linearRandomGenerator = (x0, a, b, m, n) => {
    const results = []
    for (let i = 0; i < n; i++) {
        x0 = (a * x0 + b) % m
        results.push(x0)
    }
    return results
}

    // Generates a random number within user indicated interval
    const getRandom = async (min, max, base) => {
        const response = await 	fetch("https://www.random.org/integers/?num=1&min="+min+"
 &max="+max+"&col=1&base="+base+"&format=plain&rnd=new")
           return response.text() 
    } 

 // Output handling
 const handleGenerate = () => {
    handleActive(generateButton)
    const base = binary.checked ? 2 : decimal.checked ? 10 : 16
    if (!minimum.value || !maximum.value) {
        prompter.style.color = 'red' 
        prompter.textContent = "Enter Min & Max values"
    } else {
        getRandom(minimum.value, maximum.value, base).then((data) => {
            resultValue.textContent = data
            prompter.textContent = ""    
        }).catch((error) => {
            resultValue.textContent = 'ERROR'
            prompter.textContent = 'Connection error. Unable to 						generate';    
        })
            handleRestart(