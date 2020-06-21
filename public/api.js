/**
 * 
 */
const hosturl = '/api/v1/posts' 
const request = window.superagent
const hosturl_picture = '/api/v1/pictures'
/*
request
  .get(hosturl)
  .end(function(err, res){
    console.log(res.text);//レスポンス
    //レスポンスがJSONの場合 
    console.log(res.body);//ここにparse済みのオブジェクトが入る
  });
*/
/**
 * function
 */
const getJsondata = () => {
  const jsonData = [];
  $.ajax({
    type: 'GET',
    url: hosturl, 
    dataType: 'json',
    contentType: 'application/json',
    success: function(json) {
      console.log('JSON: ',json)
      json.data.forEach((data) => {
        jsonData.push(data)
      });
      console.log('ajax', jsonData);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown){
      console.log(XMLHttpRequest,textStatus,errorThrown)
    }
  });
  console.log('return', jsonData);
  return jsonData
}



/**
 * コンポーネント
 */
/*class SimpleForm extends React.Component {
  //コンストラクタ
  constructor (props) {
    super(props)
    this.state = { value: '' }
  }
  //値が変更されたとき
  doChange (e) {
    const newValue = e.target.value
    this.setState({ value: newValue })
    console.log(newValue);
  }
  doSubmit (e) {
    console.log('送信データ:', e);
    e.preventDefault()
    //Formの参照を取る
    const form = $('#sipmleForm')
    $.ajax({
      url : form.attr('action'), //Formのアクションを取得して指定する
      type: form.attr('method'),//Formのメソッドを取得して指定する
      data: form.serialize(),　 //データにFormがserialzeした結果を入れる
      timeout: 10000,
      success: function(json) {
        console.log('Post JSON: ', json)
        getJsondata()
      },
      error: function(XMLHttpRequest, textStatus, errorThrown){
        console.log('Error Post: ', XMLHttpRequest,textStatus,errorThrown)
      }
    });
  }
  render () {
    const doSubmit = (e) => this.doSubmit(e)
    const doChange = (e) => this.doChange(e)
    return (
      <form onSubmit={doSubmit} action="/api/v1/posts" method="post" id="sipmleForm">
        <input type="text" name="post[title]" id="post_title" value={this.state.value} onChange={doChange} />
        <input type="submit" value="送信" />
      </form>
    )
  }
}*/

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    const form = $('#pictureForm')
    
    console.log('シリアライズ',form.serialize());
    alert(
      `Selected file - ${this.fileInput.current.files[0].name}`
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="pictureForm" action="/api/v1/pictures" method="post">
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} name="picture[src]"/>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

class APP extends React.Component {
  //マウント
  constructor (props) {
    super(props)
    console.log('constructor')
  }
  componentWillMount () {
    console.log('componentWillMount')
  }
  componentDidMount () {
    console.log('componentDidMount')
  }
  
  //更新
  componentWillReceiveProprs (nextProps) {
    console.log('componentWillReceivePropr')
  }
  shouldComponentUpdate (nextProps, nextStatus) {
    console.log('shouldComponentUpdate')
    return true
  }
  componentWillUpadte () {
    console.log('componentWillUpadte')
  }
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }
  
  //アンマウント
  componentWillUnmount () {
    console.log('componentWillUnmount')
  }
  
  render () {
    console.log('render')
    const setStateHandler = (e) => {
      console.log('* call setState()')
      this.setState({ r: Math.random() })
    }
    return (
      <button onClick={ setStateHandler }>setState</button>  
    )
  }
}

class Postapp extends React.Component {
  //マウント
  constructor (props) {
    console.log('constructor')
    super(props)
    this.state = {　
      items: null, //読み込んだデータ保存用
      value: ''
    }
  }
  componentWillMount () {
    console.log('componentWillMount')
    this.httpRequest()
  }
  httpRequest () {
    request.get(hosturl)
      .accept('application/json')
      .end((err, res) => {
        this.loadedJSON(err, res)
      })
  }
  loadedJSON (err, res) {
    if (err) {
      console.log('JSON読み込みエラー:', err);
      return
    }
    
    //状態の更新
    this.setState({
      items: res.body
    })
  }
  componentDidMount () {
    console.log('componentDidMount')
  }
  
  //更新
  componentWillReceiveProprs (nextProps) {
    console.log('componentWillReceivePropr')
  }
  shouldComponentUpdate (nextProps, nextStatus) {
    console.log('shouldComponentUpdate')
    return true
  }
  componentWillUpadte () {
    console.log('componentWillUpadte')
  }
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }
  
  //アンマウント
  componentWillUnmount () {
    console.log('componentWillUnmount')
  }
  
  //値が変更されたとき
  doChange (e) {
    const newValue = e.target.value
    this.setState({ value: newValue })
    console.log(newValue);
  }
  doSubmit (e) {
    console.log('送信データ:', e);
    e.preventDefault()
    //Formの参照を取る
    const form = $('#sipmleForm')
    console.log('シリアライズ',form.serialize());
    console.log('シリアライズ',form.serializeArray());
    $.ajax({
      url : form.attr('action'), //Formのアクションを取得して指定する
      type: form.attr('method'),//Formのメソッドを取得して指定する
      data: form.serialize(),　 //データにFormがserialzeした結果を入れる
      timeout: 10000,
      success: function(json) {
        console.log('Post JSON: ', json)
      },
      error: function(XMLHttpRequest, textStatus, errorThrown){
        console.log('Error Post: ', XMLHttpRequest,textStatus,errorThrown)
      }
    });
    this.httpRequest()
  }
  
  render() {
    const doSubmit = (e) => this.doSubmit(e)
    const doChange = (e) => this.doChange(e)
    
    //JSONデータの読み込みが完了しているか？
    if (!this.state.items) {
      return <div className='App'>現在読込中</div>
    }
    
    //読み込んだデータから要素を生成する
    const domItem = this.state.items.data.map(e => {
      return <li key={e.id }>{ e.title }</li>
    })
    return (
      <div className='App'>
        <form onSubmit={doSubmit} action="/api/v1/posts" method="post" id="sipmleForm">
          <input type="text" name="post[title]" id="post_title" value={this.state.value} onChange={doChange} />
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">ログイン</button>  
          <input type="submit" value="送信" />
        </form>
        <ul>
          {domItem}
        </ul>
      </div>
    )
  }
}

class Picutreapp extends React.Component {
  //マウント
  constructor (props) {
    console.log('constructor')
    super(props)
    this.state = {　
      items: null, //読み込んだデータ保存用
      value: ''
    }
    this.fileInput = React.createRef()
  }
  componentWillMount () {
    console.log('componentWillMount')
    this.httpRequest()
  }
  httpRequest () {
    console.log('httpRequest');
    request.get(hosturl_picture)
      .accept('application/json')
      .end((err, res) => {
        this.loadedJSON(err, res)
      })
  }
  loadedJSON (err, res) {
    console.log('loadedJSON');
    if (err) {
      console.log('JSON読み込みエラー:', err);
      return
    }
    
    //状態の更新
    this.setState({
      items: res.body
    })
    console.log('now status', this.state.items);
  }
  componentDidMount () {
    console.log('componentDidMount')
  }
  
  //更新
  componentWillReceiveProprs (nextProps) {
    console.log('componentWillReceivePropr')
  }
  shouldComponentUpdate (nextProps, nextStatus) {
    console.log('shouldComponentUpdate')
    return true
  }
  componentWillUpadte () {
    console.log('componentWillUpadte')
  }
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }
  
  //アンマウント
  componentWillUnmount () {
    console.log('componentWillUnmount')
  }
  
  //値が変更されたとき
  doChange (e) {
    /*const newValue = e.target.value
    this.setState({ value: newValue })
    console.log(newValue);*/
    let files = e.target.files
    let file = files[0]
    let reader = new FileReader()
    
    //reader.readAsDataURL(file)
    reader.readAsBinaryString(file)
    reader.onload = (e) =>  {
      let result = e.target.result
      this.setState({ value: result })
    }

  }
  doSubmit (e) {
    const data = this.state.value
    console.log('送信データ:', e);
    
    e.preventDefault()
    //Formの参照を取る
    const form = $('#pictureForm')
    const formdata  = new FormData(form.get(0))

    
    $.ajax({
      url : form.attr('action'), //Formのアクションを取得して指定する
      type: form.attr('method'),//Formのメソッドを取得して指定する
      processData: false,
      contentType: false,
      data: formdata,　 //データにFormがserialzeした結果を入れる
      timeout: 2000,
      success: function(json) {
        console.log('Post JSON: ', json)
      },
      error: function(XMLHttpRequest, textStatus, errorThrown){
        console.log('Error Post: ', XMLHttpRequest,textStatus,errorThrown)
      }
    });
    setTimeout(() => {
      this.httpRequest()
    }, 2000);
  
  }
  
  render() {
    const doSubmit = (e) => this.doSubmit(e)
    const doChange = (e) => this.doChange(e)
    
    //JSONデータの読み込みが完了しているか？
    if (!this.state.items) {
      return <div className='App'>現在読込中</div>
    }
    
    //読み込んだデータから要素を生成する
    const domItem = this.state.items.data.map(e => {
      return <li key={e.id }><img src={ e.src.url } alt="" width="384" height="128"></img></li>
    })
    return (
      <div className='App'>
        <form onSubmit={doSubmit} action="/api/v1/pictures" method="post" id="pictureForm">
          <input type="file" name="picture[src]" id="picture_src" ref={this.fileInput} onChange={doChange} />
          <input type="submit" value="画像登録" />
        </form>
        <ul>
          {domItem}
        </ul>
      </div>
    )
  }
}

/**
 *  メイン
 */
//DOM生成 
const DOM = <div className="row d-flex justify-content-around">
  <Picutreapp />
</div>

const DOM2 = <FileInput />

//JSONデータ取得
//getJsondata()

//描写
ReactDOM.render(
  DOM,
  document.getElementById('root')
);