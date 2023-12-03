function countMatches(arr,key)
{
    const result = new Promise((resolve, reject) => {
        setTimeout(() => {

            if (arr.length == 0) reject('Error : Invalid Parameter (array)')
            if (key == null) reject('Error : Invalid Parameter (key)')
            if (typeof arr[0] != typeof key)reject('Error : Invalid Parameter (types do not match)')

            let m = 0
            for (let i = 0; i < arr.length; i++)
            {
                if (arr[i] == key) m++
            }
            resolve(m)
            
        })
    })
    return result;
}

function countMatchesAsync(arr,key,done)
{
    
    let finished = 0, result = 0, slices = 4
    if (arr.length < 4)
    {
        slices = 1
    }
    let size = arr.length / slices
    for (let i = 0; i < slices; i++)
    {
        (async () => {
            let r = await countMatches(arr.slice(i * size, (i+1) * size), key)
            console.log(`slice ${i+1}/${slices} : ${r} matches`);
            result += r
            finished++
            if (finished == slices)
            {
                console.log(`total matches = ${result}`)
                done(result)
            }
        })();
    }
}
