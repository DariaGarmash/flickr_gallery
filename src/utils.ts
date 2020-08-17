interface Args {
    [i: string]: string | boolean | number;
}

export function serializeArg(obj: Args){
    const str = [] as string[]

    for(const p in obj)
        if( (p in obj) && obj[p] != ''){

            let v = obj[p]

            if(typeof obj[p] === 'boolean')
                v = obj[p] ? '1' : '0';
           
            str.push(`${encodeURIComponent(p)}=${encodeURIComponent(v)}`);

        }
    
    return str.join("&")
}