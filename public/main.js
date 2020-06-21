const parameters = $.param({
/*  method: 'flickr.photos.search',
  api_key: apiKey,
  text: 'cat', // 検索テキスト
  sort: 'interestingness-desc', // 興味深さ順
  per_page: 12, // 取得件数
  license: '4', // Creative Commons Attributionのみ
  extras: 'owner_name,license', // 追加で取得する情報
  format: 'json', // レスポンスをJSON形式に
  nojsoncallback: 1, // レスポンスの先頭に関数呼び出しを含めない*/
}); 

/*function Greeting (props){
  return <h1>{props.type}</h1>
}
const dom = <div>
  <Greeting type="Good morning!" />
</div>*/

$(window).on('load', () => {

  $.ajax({
    type: 'GET',
    url: '/api/v1/posts',//'/people',
    dataType: 'json',
    contentType: 'application/json',
    success: function(json) {
      console.log('JSON: ',json)
    },
    error:　function(XMLHttpRequest, textStatus, errorThrown){
      console.log(XMLHttpRequest,textStatus,errorThrown)
    }
  });
});

