$.getJSON("php/instagram.php", function(instagram_data){

  const gallery_data = instagram_data["business_discovery"]["media"]["data"];
  let photos = "";
  const photo_length = 2;
　
  //写真 //イイネ数
  for(let i = 0; i < photo_length ;i++){
    photos += '<li class="gallery-item"><img src="' + gallery_data[i].media_url + '"><div class="mask"><div class="like-count"><i class="fas fa-heart"></i>'+ gallery_data[i].like_count + '</div></div></li>';
  }

  $("#insta_gallery").append(photos);
  
});