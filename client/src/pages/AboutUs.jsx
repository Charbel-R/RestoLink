import React from 'react';

export default function AboutUs() {
  return (
    <div className='bg-blue-50 h-auto'>
      <div className="about-us container mx-auto px-4 py-12 max-w-2xl">
        <div className="content px-8 py-12 rounded-lg shadow-md bg-white mx-auto max-w-2xl">
          <div className="flex items-center justify-center mb-8">
            <h1 className="text-3xl font-bold text-center text-slate-800">About RestoLink</h1>
            {/* Add an optional logo or image here */}
          </div>
          <p className="text-xl font-bold text-center text-slate-700">Your One-Stop Restaurant Solution</p>
          <p className="text-slate-700 mt-8 leading-relaxed mb-8">
            Struggling to find the perfect ingredients or equipment for your restaurant? RestoLink is your one-stop shop for all your restaurant needs! This app connects restaurant owners and suppliers, making it easier than ever to find the products you need and the talent to run your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className='rounded-lg shadow-md px-4 py-4'>
              <h3 className="text-xl font-bold text-slate-800 mb-4 underline">Restaurant Owners</h3>
              <ul className=" space-y-2 text-slate-700">
                <li>Browse a wide variety of restaurant supplies from trusted vendors.</li>
              </ul>
            </div>
            <div className='rounded-lg shadow-md px-4 py-4'>
              <h3 className="text-xl font-bold text-slate-800 mb-4 underline">Restaurant Suppliers</h3>
              <ul className="space-y-2 text-slate-700">
                <li>Showcase your products to a wider audience of restaurant owners.</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed mt-8">
            RestoLink offers a user-friendly platform with a focus on efficient connections.
          </p>
        </div>
        {/* New Section: Tech Stack */}
        <section className="mt-64">
        <h2 className="text-2xl  font-bold text-indigo-600 mb-4">Tech Stack</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <img 
            className="w-40 h-40  shadow-md"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAzFBMVEX///9srEhZljbCv79gnjxcmTm/vLxnpkS5trbq6enT0dHIxcX7+/vb2dk3NztmqT9Uky719fXw7+9EREfNy8tMTE/j4uIvLzM8PD+Pj5H4+/dcpS8mJisXFx5AigBsbG6goKKdxYpJjhq80rKtzp2Rv3vV4s9/f4EAAACXl5haWlxypFk0hQDt9Ork7OBgmkCxyqWOtnt+tWG106jQ4siBrGtpn02sq6wKCxR/r2eevo9SoRtInACHum1rpUuIqnaWsIekuZiqtqG4vLJr3R1kAAAJhklEQVR4nO2ce3uaShDGEU4ocpP7xUAwJg2VVNOkSbCX06bt9/9OZ1lAURfWRHoYfHz/KaFe5sfOzszOggxz0knHosW4awva0/j6pmsT2tP8y9fjGZrHd9qiaxva0vhyNL0/lqF5PH93dnEkQ/N4Pnh3pt12bUYruvo2QDDsxyMIaOPP3wcYhtXkrm05VONrNC45zPRr18YcqPnl+aCEYadXXZtzkOaXo8EahtX6TLNiKWHu+kuzZilgEM1j10a9UePrFUsJ01+aq/PBDgyrab1MN4/fBgQYRNPDumZRZanAIE+bd23bazUfjWpg2Olt3wro9+eDOhj2omelwOdNlk0Y9uJT1/a9RjejQRMMq/UoQM//pcE89yekXW+zbMOwWm9W0Y8DKgyr9WTazN/vsBBgelLXbEcyIgw7ve9D7lzszH4iDHvRg+XA+JowMCQY7Q5+yXmzO/vJMOwUfMt2fEkaGCIMO4U+NDu5vwFGu4XdfJLJA0OGgd6umZNZamC0adf2Nur9q2Bgh+fxdzJLHQwLeWh2K0wKDOQSrcbJGmDuuja5Vld1A1MLw7JgZw2pKqPAaF+6NrpGN3UoSP/UwTwDXQpcvwGG1WC2asb1XtYEcwuyHfD48BYYoNG5ycsaYEDeITAmLP33GhmIi7SbJi9rgGGnAP3sqsnLmmA0gK0N4tp/Hxj2DJyfkbple8LAWwg0T5lGGHgttPoikwoDb2eQ1MfcE4a9AFafVfb8Xw8DrYNGbMruC6MB2+UkNzL3hGEvYEWAx+YpQ4OBNWmuDoKBVdGMKcFsUNsDyCfNPaRG7bi2ybQfzBkkGEoxQ4NhP4KCoURmKgykcLZoRqHCXEAqnBeU+U+DAbW5cXMoDKSG08Ew910TVEQrAGgw2lPXBBUdDAPpsQcqTHM5A2trgzpnaDBa1wQVHRUMNc/0CoZSzVBhzromqGhBWWj2Cmbe3DWjwzx3TVARdQlAg4GUZ2idJioMpHKGfMvc/jCgCk1qD4AGA6qjcVirCdhGwKEwkFaaB3Y02Y+g+rMLSqKhjQyk7gw10TTDaM+gYMaHbGnAWjUzh202wWrOMNTOOWUXAFQwy54zOWRkIDU0GerWWfPO2ROoyEyNAM17mp+AwdTfOUuHgTZlKLebNd8HcAftPoA336IFb+c80xtvnoNWMudqLM+abtF6BjdlkJr8rOnmOYBe1pw3m0YGoJehEPDwFhjtCVwsw/pc72cNMJB6GVW9AQbm9M9Uvw6ohYG2lKno1TCQn3He+EmTvWAgbWZuSa5LnHUw8G4DrqhuC60GBvLA1D4OXPdoE7j7ZjdVU6GRYaD/aItMzpzvyKEMYlVW1ZzoaEQYeCvMHRFvpP/RQyfDIjnal7tdJ+vHj8/sLmx+PO3C9MDJMu2kztHDz+cdlk+gmuX12r4tYPTl5VnbZIH3nEmtrrZhfm3BaLf9cDKszcXA6On37QYM5GKZoI1sM7r/swGjwVz312qjSBv95DdgQG3776N55fc0Ri/czwrMBcjmUqMWa5rRi/SyhrmA+AAwTYt/S5ofv7jfaxZouzH7afFwXuTM3xx312+W1fMOo6c/HFf4GciHzPdTvs8xuuc5jtdwTAa3SfYaXZ6PBqOvHNLLFBXK/covO7pGddqvDIa71Z56VMOQdfXw4w+G+fOrFwuYZt184jEM15Oav1kOhuGdru1oRQYeF6FrM9qRLmZDI3VtRjuSlSzPKF2b0ZKySSMcx5RhmKGEYIZdW9GSDAvBGF1b0ZJ0iz8eGFk8IhhGOcEA1QkGqk4wUIXqmaMpZxhDtI6m0EQynGOpzU466aSTjl+6UpFj6EWnUHcUB6k42a2J+8uwLJ7nBcmyLIkTBE7Jyx5HlAR0Hp2UBIF3etMMlRWOEzJrdUNBYFyRXXWL4y2ZkQ2lV32qobRqd+pZi62o4hyeF/EBOif1pkytwOB2gZSPzQqGWQPCVxWGkZFTiXiKKCsYqa8w2XIhHxqlMjItupkT64ycRhGf/SHFiV+pgI00sqPZ6sLJQqozInrJ+lLqk8SM0syaYho7sySJhXW83YSR+WL3YwUjCyXVodLTJAg+MOkydL3Qlx116apqUH64PFvafhS4gZ/ZJkZeGM6UCL1UVUv7ZsuYn5lu6CVBhE1PPkQ++kx3tS2wCcOgKKbIFRida4sFBU7fNr0oUgwrMoPYTR3FN70kH3YjDjMzjMjDNE5sm2ZiR5NZgl6Sj00UpBlmdiLJRsby3Oy9VuKFJc0WjMjnkwbvHaAUJKAI3V6eQdcVf6+YeB7+1IkXYo+RJ8sZ9hZE43LZgaOaSfZaOfLMDIKxwpzbN0P8WU5SMCAa0yDCKGsYCRUAoiXxgthaEZAWhjCxmjA5VYC/XbEDLv8fyVPjzLShrWKHY5RAnWGI4i2CHQzz66Dmdsm+F/B1MEoJhV85lHi+tQgwMcN8mH3VxP86ue8wXOBZTHFGxW61gtHDHAbx4795e4mTvO8mxUVObTUmwojbAYAx+PZqgDoYOXXN8ut8Vd2AMYqRmak2dquJZ+N3xmpUwFiJGhFhyqyyhsHTqCVHa4BRi5HRZzUwztKMkIfoUSjm71TtwiolIsPoaMLrWzBDvjj3F2CUws141+VLGHfTzQw3h2EmSy9KUS7KqYexF5QwieuTYFA9k8fBKoxQVAV/AaacM5aq+kWM9gN/IwAgmNxUWYxclCLLNDtT3SJmWMnSIsAYaGCYbZgyJvwlGCH/13OLq5iE2IShuT0yKPTxlc/iUdLKj1KvdDgHwZROpKPAtSYoYfhsMdCOZmaYf1dccTP84ZLq2dk1l9PlBJ9wyrHKRgafiZamj9aPcpn3YtXFQQxdkLLiQQsWLjdWdiqVCwoEEn6JzLU2YxzBRt8vyXKW+YNYQo4To4pmomAI23VTRfTVCf42LnY9e4KKEXES5AdMpJpqGLqofssNMmIzSCSHj+zC6mG20sRrTTEzv8gnsmNlK03eEkWJl5SWxkWeJHEcR5FjTCJ8IA9jfJAnCSuObDOJc8MMNUJKUPr0EnyARk1Gw2nbpooKutzvUMWa2KjkKazWRWRvJrRuFp1VanTQX9kpfPb/6wEMFWVtgqHretZ/cIaGYQyz8zIfTQQhncWeWSYlxlH2XJ7ILRZlLcjwkzwOGalrpx0bc6jikCsPA5treiV8Kaq3ShCh3ZuuBFmO5xVpnlE+9N3LmEQ1Z3gSi8tJx6a0INtVAxSng+VR3DyH0qNtxzz9hSeddNJJJ50EWv8BxTrims3NPwcAAAAASUVORK5CYII=" 
            alt="MongoDB Logo" />
          <img 
            className="w-40 h-40  shadow-md" 
            src="data:image/png;base64,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" 
          alt="React Logo" />
          <img 
            className="w-40 h-40  shadow-md" 
            src="https://miro.medium.com/v2/resize:fit:640/1*InZw9eeTPgLEanlETUStKw.png" 
            alt="Vite Logo" />
          <img 
            className="w-40 h-40  shadow-md" 
            src="https://cdn-images-1.medium.com/max/480/1*2YG993b8WrHwvmAe7WckAA.png" 
            alt="React Toolkit Logo" />
          <img 
            className="w-40 h-40  shadow-md" 
            src="https://miro.medium.com/v2/resize:fit:365/1*Jr3NFSKTfQWRUyjblBSKeg.png" 
            alt="Express Logo" />
          <img 
            className="w-40 h-40  shadow-md" 
            src="https://play-lh.googleusercontent.com/3C-hB-KWoyWzZjUnRsXUPu-bqB3HUHARMLjUe9OmPoHa6dQdtJNW30VrvwQ1m7Pln3A" 
            alt="JWT Logo" />
        </div>
      </section>
      </div>
    </div>
  );
}