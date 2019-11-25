function timeCompare(){
            let backendDate = new Date('Mon Nov 25 2019 05:30:00 GMT+0530 (India Standard Time)');
            // let backendDate = new Date('Mon Nov 23 2019 05:30:00 GMT+0530 (India Standard Time)');
            // let backendDate = new Date('Mon Nov 29 2019 05:30:00 GMT+0530 (India Standard Time)');
            let presentdate = new Date();
            console.log('presentdate-->',presentdate);
            console.log('backendDate-->',backendDate);

            // for only day check



            if( (presentdate.getFullYear() === backendDate.getFullYear()) &&  (presentdate.getMonth() === backendDate.getMonth()) &&
                (presentdate.getDate() === backendDate.getDate())   )
                {
                    console.log('yes backendDate is today')
                }

                else if( (presentdate.getFullYear() >= backendDate.getFullYear()) &&  (presentdate.getMonth() >= backendDate.getMonth()) &&
                (presentdate.getDate() > backendDate.getDate()) )
                {
                    console.log('given backendDate is past');
                }
                else{
                    console.log('backendDate is future');

                }


        }

        timeCompare();

            function timeCompare2(presentdate, backendDate) {
            let one_day=1000*60*60*24;
            // return (    );
            console.log( Math.round((presentdate.getTime()-backendDate.getTime())/one_day) );

            if( Math.round((presentdate.getTime()-backendDate.getTime())/one_day) === 0 ){
                console.log('today');      
            }
            else if( Math.round((presentdate.getTime()-backendDate.getTime())/one_day) > 0 ){
                console.log('past');

            }
            // negative value

            else{
                console.log('future');

            }

        }

               let backendDate = new Date('Mon Nov 25 2019 05:30:00 GMT+0530 (India Standard Time)');
            // let backendDate = new Date('Mon Nov 23 2019 05:30:00 GMT+0530 (India Standard Time)');
            // let backendDate = new Date('Mon Nov 29 2019 05:30:00 GMT+0530 (India Standard Time)');
            let presentdate = new Date();

        timeCompare2(presentdate,backendDate);

        check and display with minutes

        function timeCompare3(presentdate, backendDate) {
            let one_day = 1000 * 60 * 60 * 24;
            let one_hour = 1000 * 60 * 60;
            let one_minute = 1000 * 60;

let diff = presentdate.getTime() - backendDate.getTime();
console.log(diff, typeof diff);



            if (Math.round((presentdate.getTime() - backendDate.getTime())) > one_day) {
                let diff = presentdate.getTime() - backendDate.getTime();
                console.log('diff days ->', Math.round(diff / one_day));
            }

            else if (Math.round((presentdate.getTime() - backendDate.getTime())) < one_day
                && Math.round((presentdate.getTime() - backendDate.getTime())) > one_hour) {
                let diff1 = presentdate.getTime() - backendDate.getTime();
                console.log('diff hours ->', Math.round(diff1 / one_hour));
            }

            else {

                let diff2 = presentdate.getTime() - backendDate.getTime();
                console.log('diff minutes ->', Math.round(diff2 / one_minute));

            }

        }

        let backendDate = new Date('Mon Nov 25 2019 16:20:00 GMT+0530 (India Standard Time)');
        // let backendDate = new Date('Mon Nov 25 2019 15:38:00 GMT+0530 (India Standard Time)');
        // let backendDate = new Date('Mon Nov 25 2019 14:30:00 GMT+0530 (India Standard Time)');
        // let backendDate = new Date('Mon Nov 23 2019 15:30:00 GMT+0530 (India Standard Time)');
        // let backendDate = new Date('Mon Nov 29 2019 15:30:00 GMT+0530 (India Standard Time)');
        let presentdate = new Date();
        console.log(presentdate);


        timeCompare3(presentdate, backendDate);
