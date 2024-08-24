const form=document.querySelector('#searchform');
// const show_name=document.querySelector('#show_name');

form.addEventListener('submit',  async function(e){
    e.preventDefault();
     const search_name= form.elements.query.value;
     const config ={params:{q:search_name}}
     const res=await axios.get(` https://api.tvmaze.com/search/shows?q=`,config);
     console.log(res.data);
     for(let i=0;i<10;i++){
        const img=document.createElement('img');
        img.src=res.data[i].show.image.medium;
        document.body.append(img);
     }

});