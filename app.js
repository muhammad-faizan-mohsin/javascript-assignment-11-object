var watch = {
    tagheuer: {
        tagheuer_model_1: {
            model: "TAG Heuer AQUARACER ALARM WBP1110.BA0627",
            price: 614_500,
            img: "images/tag-watch-1.jpg",
            company: "tagheuer"
        },
        tagheuer_model_2: {
            model: "TAG Heuer AQUARACER ALARM WBP1110.BA0627",
            price: 661_500,
            img: "images/tag-watch-2.jpg",
            company: "tagheuer"
        },
        tagheuer_model_3: {
            model: "TAG Heuer FORMULA 1 Watch WAZ1110.FT8023",
            price: 425_500,
            img: "images/tag-watch-3.jpg",
            company: "tagheuer"
        },
        tagheuer_model_4: {
            model: "TAG Heuer FORMULA 1 WATCH WAZ1120.BB0879",
            price: 724_500,
            img: "images/tag-watch-4.jpg",
            company: "tagheuer"
        }
    },
    rado: {
        rado_model_1: {
            model: "The Original Automatic R12995103",
            price: 410_915,
            img: "images/rado-watch-1.jpg",
            company: "Rado"
        },
        rado_model_2: {
            model: "Rado True Square Automatic Blue Dial Men’s Watch – 763.6077.3020",
            price: 572_670,
            img: "images/rado-watch-2.jpg",
            company: "Rado"
        },
        rado_model_3: {
            model: "Rado Ceramica Black Quartz Analog  Women’s Watch – R21702182",
            price: 551_165,
            img: "images/rado-watch-3.jpg",
            company: "Rado"
        },
        rado_model_4: {
            model: "   Rado Centrix Black Dial Automatic Men’s Watch – 763.0035.3071 ",
            price: 602_015,
            img: "images/rado-watch-4.jpg",
            company: "Rado"
        },

    },
    citizen: {
        citizen_model_1: {
            model: "PROMASTER MARINE – BN2036-14E",
            price: 224_450,
            img: "images/citizen-watch-1.jpg",
            company: "Citizen"
        },
        citizen_model_2: {
            model: "PROMASTER MARINE – NB6021-68L",
            price: 334_350,
            img: "images/citizen-watch-2.jpeg",
            company: "Citizen"
        },
        citizen_model_3: {
            model: "ECO-DRIVE CHRONOGRAPH – CA0773-15E",
            price: 107_700,
            img: "images/citizen-watch-3.jpg",
            company: "Citizen"
        },
        citizen_model_4: {
            model: "PROMASTER WORLD TIMER – CB5004-59W ",
            price: 247_000,
            img: "images/citizen-watch-4.jpg",
            company: "Citizen"
        },

    }
    ,
    tissot: {
        rado_model_1: {
            model: "TISSOT CARSON PREMIUM POWERMATIC 80",
            price: 159_860,
            img: "images/tissot-watch-1.jpg",
            company: "Tissot"
        },
        rado_model_2: {
            model: "TISSOT CARSON PREMIUM",
            price: 81_250,
            img: "images/tissot-watch-2.jpg",
            company: "Rado"
        },
        rado_model_3: {
            model: "TISSOT CHEMIN DES TOURELLES POWERMATIC 80 GMT",
            price: 250_750,
            img: "images/tissot-watch-3.jpg",
            company: "Rado"
        },
        rado_model_4: {
            model: "TISSOT EVERYTIME MEDIUM ",
            price: 63_350,
            img: "images/tissot-watch-4.jpg",
            company: "Rado"
        },

    },
    gshock: {
        gshock_model_1: {
            model: "Casio Analog-Digital Black Dial Women’s Watch-BA-110RG-1ADR (BX157)",
            price: 32_715,
            img: "images/gshock-watch-1.jpg",
            company: "G-Shock"
        },
        gshock_model_2: {
            model: "Casio G-Shock Ana-Digi 5900 Series Men’s Watch ? DW-5900-1DR",
            price: 31_300,
            img: "images/gshock-watch-2.jpg",
            company: "G-Shock"
        },
        gshock_model_3: {
            model: "Casio G-Shock Analog Digital Men’s Watch – GA-2000-1A2DR",
            price: 42_400,
            img: "images/gshock-watch-3.jpg",
            company: "G-Shock"
        },
        gshock_model_4: {
            model: "Casio G-Shock Analog Digital Men’s Watch – GA-2000-1A9DR",
            price: 42_400,
            img: "images/gshock-watch-4.jpg",
            company: "G-Shock"
        },

    }
}


for (var key in watch) {
    for (var key1 in watch[key]) {
     
        
// console.log(watch[key][key1][key2].img)
            var main = document.getElementById("my-card")
            main.innerHTML += `  
      
                
            <div class="col-12 col-sm-12 col-md-6 col-lg-3">
                <div class="card p-0 product-card">
                    <img src="${watch[key][key1].img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-brand">${watch[key][key1].company}</p>
                        <h6 class="card-title">${watch[key][key1].model}</h6>
                        <span class="product-price">Rs: ${watch[key][key1].price}/- </span>
                        <br />
                    </div>
                </div>
                </div>
                `
          
        }

    }

    function all() {
        for (var key in watch) {
            for (var key1 in watch[key]) {
             
                
                    var main = document.getElementById("my-card")
                    main.innerHTML += `  
              
                        
                    <div class="col-12 col-sm-12 col-md-6 col-lg-3">
                        <div class="card p-0 product-card">
                            <img src="${watch[key][key1].img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="card-brand">${watch[key][key1].company}</p>
                                <h6 class="card-title">${watch[key][key1].model}</h6>
                                <span class="product-price">Rs: ${watch[key][key1].price}/- </span>
                                <br />
                            </div>
                        </div>
                        </div>
                        `
                  
                }
        
            }
    }
    function filter(brands) {
        main.innerHTML = "";
        for (var key in watch) {
            for (var key1 in watch[key]) {
              
                    
                    if(brands === key){
                        
                       main.innerHTML += `  
                 
                           
                       <div class="col-12 col-sm-12 col-md-6 col-lg-3">
                           <div class="card p-0 product-card">
                               <img src="${watch[key][key1].img}" class="card-img-top" alt="...">
                               <div class="card-body">
                                   <p class="card-brand">${watch[key][key1].company}</p>
                                   <h6 class="card-title">${watch[key][key1].model}</h6>
                                   <span class="product-price">Rs: ${watch[key][key1].price}/- </span>
                                   <br />
                               </div>
                           </div>
                           </div>
                           
                           `
                           
                    }}
                }
  

        }
        
