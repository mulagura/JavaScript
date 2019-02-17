                  // callbacks

// A callback function is a function passed into another function as an argument,
   // which is then invoked inside the outer function.
   
        let greet = ()=>{
        return 'Good Morning!';
        };
        let wish = (callback,name)=>{
            console.log(`Hello Mr.${name}, ${callback()}`);
        };

        wish(greet,'Ram');


        let sum = (a,b)=>{
            return a+b;
        };
        let calci = (a,b,callback)=>{

            if(typeof callback === 'function'){
                console.log(`${callback(a,b)}`);
            }
            
        };
        calci(2,3,sum); // 5



        console.log(typeof greet,typeof sum,typeof wish); // function function function

        // 

        const persons = ['Ram','Mulagura','venkata'];

        let chart = ()=>{
            setTimeout(()=>{
                console.log(`display chart:${persons}`);
            },100);
        };

        let addTo = (persons,callback)=>{
            setTimeout(()=>{
                persons.push('SP');
                callback();
            },5000);
        };

        addTo(persons,chart)

// promises

            // syntax:
            
            let isDataPresent = new Promise((resolve,reject)=>{

            let isData = true;

            if(isData){
                resolve('yes data is resolved');
            }
            else{
                reject('no, data has been rejected');
            }

            });

            isDataPresent.then((isResloved)=>{
                console.log(isResloved);
            }).catch((isRejected)=>{
                console.log(isRejected);
            });  // yes data is resolved
