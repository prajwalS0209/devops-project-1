
const dogImage = document.querySelector('.dogImage')
const dogBtn = document.querySelector('#dogBtn')

dogBtn.onclick =  async () =>{
  const apiData = await fetch('https://dog.ceo/api/breeds/image/random')
  const response = await apiData.json()
    dogImage.innerHTML = `<img src="${response .message}" alt="" srcset="" width=500px height = 500px>`
}

