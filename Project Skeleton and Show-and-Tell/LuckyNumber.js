// x0=seed; a=multiplier; b=increment; m=modulus; n=desired array length; 
function linearRandomGenerator = (x0, a, b, m, n) => {
    function results = []
    for (let i = 0; i < n; i++) {
        x0 = (a * x0 + b) % m
        results.push(x0)
    }
    return results
}