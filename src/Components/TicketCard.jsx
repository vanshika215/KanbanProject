import React from 'react';
import "./Styles/TicketCard.css"
import  urgentImg from "../assets/urgentGrey.svg"
import highImg from "../assets/high.svg"
import lowImg from "../assets/low.svg"
import MediumImg from "../assets/medium.svg"
import noPriority from "../assets/noPriority.svg"
import todoImg from "../assets/Backlog.svg"
import backlogImg from "../assets/todoimg.svg"
import inProgressImg from "../assets/in-progress.svg"


const TicketCard = ({ ticket, grouping }) => {
    const getPriorityImg = (priority) => {
        switch (priority) {
          case 4:
            return <img src={urgentImg} alt="" style={{marginRight:"10px"}}/>;
          case 3:
            return <img src={highImg} alt="" style={{marginRight:"10px"}}/>;
          case 2:
            return <img src={MediumImg} alt="" style={{marginRight:"10px"}}/>;
          case 1:
            return <img src={lowImg} alt="" style={{marginRight:"10px"}}/>;
          case 0:
            return <img src={noPriority} alt="" style={{marginRight:"10px"}}/>;
        }
      };
      const getStatusImg = (status) => {
        switch (status) {
          case "Backlog":
            return <img src={backlogImg} alt="" style={{marginRight:"10px"}}/>;
          case "In progress":
            return <img src={inProgressImg} alt="" style={{marginRight:"10px"}}/>;
          case "Todo":
            return <img src={todoImg} alt="" style={{marginRight:"10px"}}/>;
        }
      };
      console.log(grouping)
  return (
    <div className="ticket-card">
    {grouping==="Priority"
    ?<>
        <p className=''>{ticket.id}</p>
      <h4 className=''>{getStatusImg(ticket.status)}{ticket.title}</h4>
      <div style={{display:"flex", alignItems:"center"}}>
    <div className='feature'>Feature Request</div>
    </div>
      </>
    :<>
    <p className=''>{ticket.id}</p>
    <h4 className=''>{grouping === "Users"? getStatusImg(ticket.status):<>hello</>}{ticket.title}</h4>
    <div style={{display:"flex", alignItems:"center"}}>
    <div>{getPriorityImg(ticket.priority)}</div>
    <div className='feature'>Feature Request</div>
    </div>
    </>}
      
      
    <div></div>    
</div>
  );
};

export default TicketCard;