var quotes =[
    "You’re going to be all right. You just stumbled over a stone in the road. It means nothing. Your goal lies far beyond this. Doesn’t it? I’m sure you’ll overcome this. You’ll walk again… soon.– Guts", 'Even if we painstakingly piece together something lost, it doesn’t mean things will ever go back to how they were. – Guts' , 'It may be hard right now, but you must silence those thoughts. Stop counting only those things that you have lost. What is gone, is gone. – Jinbei', 'How can you move forward if you keep regretting the past? – Edward Elric', ' If you can’t do something, then don’t. Focus on what you can do. – Shiroe', 'Take advantage of what you have, while you have it - Korosensei', 'The difference between the novice and the master is that the master has failed more times than the novice has tried. - Korosensei', 'Enjoy your life today. Yesterday is gone, and the tomorrow might never come. – Takeshi Yamamoto ', 'The world’s not perfect, but it’s there for us trying the best it can. That’s what makes it so damn beautiful. – Roy Mustang ', 'If you don’t take risks, you can’t create a future. – Monkey D. Luffy', 'Everything has a beginning and an end. Life is just a cycle of starts and stops. There are ends we don’t desire, but they’re inevitable, we have to face them. It’s what being human is all about. – Jet Black'
]
 
// x0=seed; a=multiplier; b=increment; m=modulus; n=desired array length; 
function linearRandomGenerator = (x0, a, b, m, n) => {
    function results = []
    for (let i = 0; i < n; i++) {
        x0 = (a * x0 + b) % m
        results.push(x0)
    }
    return results
}