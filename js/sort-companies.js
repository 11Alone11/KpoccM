const allCopmanies = document.querySelectorAll('.company')
let allCompainesName = []
allCopmanies.forEach((element) => {console.log(element.innerHTML)})
allCopmanies.forEach((element) => {allCompainesName.push(element.innerHTML)})
let newAllCompaniesName = allCompainesName.map((element) => "— " + element  )
allCopmanies.forEach((el, index) => {
    el.innerHTML = newAllCompaniesName[index]
})

let currentCompany;
let isCompanyActive = false
let currentCompanyTitle

const allCopmaniesClick = allCopmanies.forEach((element) => {

    element.addEventListener('click',() => {

        allCopmanies.forEach((el) => {
            el.classList.remove('company-active')
        })

        currentCompany = element;
        currentCompany.classList.toggle("company-active")
        currentCompanyTitle = currentCompany.innerHTML.slice(2)
        isCompanyActive = true

        let allCompanyCardTitle = document.querySelectorAll('.company-card-name')
        allCompanyCardTitle.forEach((element) => {
            if(element.innerHTML === currentCompanyTitle) {
                console.log(1)
                document.querySelectorAll('.company-card .company-card-top .company-card-name').forEach((el) => {
                    if (el.innerHTML === currentCompanyTitle)
                    console.log(el.innerHTML)
                    document.querySelectorAll(`.card${currentCompanyTitle.slice(-1)}`).forEach(element => {
                        console.log()
                        if (element.innerHTML != currentCompanyTitle.slice(-1))
                        element.style.display = 'none'
                    });
                })
            }
        })
    })
})

const button = document.querySelector('.add-offer')

const click = button.addEventListener('click', (element) => {

    if(isCompanyActive){

       console.log("clicked") 

    }
    else {
        document.querySelector('.pop-up').style.display = 'block'
    }
    
})

// allCopmanies[0].style.color = '#0500FF';