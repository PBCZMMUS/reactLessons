# Lesson 01 (To review if needed)

# Lesson 02

Edit src/App.js

- In App.js, within the header, just below the <a>tag, you can write like

  - <p>Hello</p> 		//ok
  - <p>{ "Dave" }</p>	//ok
  - <p>{ 1 }</p>		//ok
  - <p>{[1,2,3]}</p>	//ok
  - <p>[1,2,3]</p>		//ok
  - <p>{{a: 1, b: 2, c: 3}}</p> // error (refresh the borwser and see the error)

  - const name = "Dave"
  - <p>{ name }</p>		//ok

  - <p>{ true === false }</p>	//Won't show up (boolean)
  - <p>{ 2 === 4 }</p>			//Won't show up (boolean)
  - {/_<p>{ name }</p>_/} //Won't show up (comments) shift+option+a for comments on/off

  - const x = function(){...}
  - <p>{x()}</p>		//ok

  - const nameChange = function(){
	const names = ["Mandalay", "Yangon", "Myanmar"];
	const name = Math.floor(Math.random() * 3);
	return names[name];
  }
  - And call the nameChange() inside the next function block