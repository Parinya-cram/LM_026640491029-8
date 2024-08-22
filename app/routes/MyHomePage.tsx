import { useState } from "react";
  import { card } from "./data"
function IsMember ({ id,act } : { id:number,act:boolean }){
if(act)
      return <span key= {id}>✅  Hi, VIP Member.</span>
      else
      return <span key= {id}> ❌  Member Only!</span>}
function Profile ({ id, nam, bio, bgp, imgu, usern, cdat, act}:{id:number, nam:string, bio:any, bgp:string, imgu:string, usern:string, cdat:string, act:boolean}
)
{
  return (
  <div className="max-w-sm w-full lg:max-w-full lg:flex">
  <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${bgp})`, color: "blue"}} title="Profile">
</div>
<div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
<div className="mb-8">

      <p key={id} className="text-sm text-gray-600 flex items-center">
       <>
    <IsMember id={id} act={act}/>
      </>
      
    </p>
    <div className="text-gray-900 font-bold text-xl mb-2">{nam}</div>
    <p className="text-gray-700 text-base">
    {bio}
    </p>
  </div>
  <div className="flex items-center">
    <img className="w-10 h-10 rounded-full mr-4" src={imgu} title={nam}></img>
    <div className="text-sm">
      <p className="text-gray-900 leading-none">{nam}</p>
      <p className="text-gray-600">{cdat}</p>
    </div>
  </div>
</div>
  </div> );
  }
  export default function MyCard() {
  //let / ver / const
    const [active,setActive] = useState(true);
    const name = "Parinya Pathumthong"
  const note = "My Profile #Web-Programming #softwarerngineering";
    const note2 = "I AM IRON MAN"
    const chk = true
    const item = card.filter(cardItems =>
      cardItems.active === active
    );
    const cardItems = item.map(cardItem =>
      <>
          <Profile 
          id={cardItem.id}
          nam={cardItem.name}
          bio={cardItem.biog}
          bgp={cardItem.bgProf}
          imgu={cardItem.usericon}
          usern={cardItem.userName}
          cdat={cardItem.createAt}
          act={cardItem.active}/><br/>
      </>
  );
    function handleClickActive (){
      setActive(true);
      // alert("-->handleClickActive"+active);      
    }
    function handleClickNonAct (){
      setActive(false);
      // alert("-->handleClickNonAct"+active);     
    }
        return (
  <>
    <div className="m-3 bg-amber-100 p-10" style={{textAlign:"center"}}>
    <center><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
    </svg></center>
    <h1 style={{textAlign:"center", color:"red" , fontSize:"20px" , borderRadius:"30%"}}>My Card:{name}</h1>
    <div className="flex flex-row">
    </div>
  <hr/>
    </div>
  {/* <Profile/> */}
      <br />
    {cardItems}

    
  </>
    )
  }   