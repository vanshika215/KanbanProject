import React from 'react';
import TicketCard from './TicketCard';
import ControlPanel from './ControlPanel';
import "./Styles/KanbanBoard.css"
import  urgentImg from "../assets/urgentYellow.svg"
import highImg from "../assets/high.svg"
import lowImg from "../assets/low.svg"
import MediumImg from "../assets/medium.svg"
import noPriority from "../assets/noPriority.svg"
import todoImg from "../assets/todoimg.svg"
import backlogImg from "../assets/Backlog.svg"
import inProgressImg from "../assets/in-progress.svg"
import addImg from "../assets/add.svg"
import dotImg from "../assets/threeDotImg.svg"


const KanbanBoard = ({ tickets, users, grouping, sorting, setGrouping, setSorting }) => {
  const getGroupedTickets = () => {
    let groupedTickets = {};
    if (grouping === 'Status') {
      groupedTickets = tickets.reduce((acc, ticket) => {
        acc[ticket.status] = acc[ticket.status] ? [...acc[ticket.status], ticket] : [ticket];
        return acc;
      }, {});
  
    } else if (grouping === 'Users') {
      groupedTickets = tickets.reduce((acc, ticket) => {
        acc[ticket.userId] = acc[ticket.userId] ? [...acc[ticket.userId], ticket] : [ticket];
        return acc;
      }, {});
    } else {
      groupedTickets = tickets.reduce((acc, ticket) => {
        acc[ticket.priority] = acc[ticket.priority] ? [...acc[ticket.priority], ticket] : [ticket];
        return acc;
      }, {});
    }
    return groupedTickets;
  };

  const groupedTickets = getGroupedTickets();
  const getPriorityText = (priority) => {
    switch (priority) {
      case "4":
        return <span><img src={urgentImg} alt="" style={{marginRight:"10px"}}/><span>Urgent</span></span>;
      case "3":
        return <span><img src={highImg} alt="" style={{marginRight:"10px"}}/><span>High Priority</span></span>;
      case "2":
        return <span><img src={MediumImg} alt="" style={{marginRight:"10px"}}/><span>Medium Priority</span></span>;
      case "1":
        return <span ><img src={lowImg} alt="" style={{marginRight:"10px"}}/><span>Low Priority</span></span>;
      case "0":
        return <span ><img src={noPriority} alt="" style={{marginRight:"10px"}}/><span>No Priority</span></span>;
    }
  };
  const getStatusText = (status) => {
    switch (status) {
      case "Backlog":
        return <span><img src={backlogImg} alt="" style={{marginRight:"10px"}}/><span>Backlog</span></span>;
      case "In progress":
        return <span><img src={inProgressImg} alt="" style={{marginRight:"10px"}}/><span>In Progress</span></span>;
      case "Todo":
        return <span><img src={todoImg} alt="" style={{marginRight:"10px"}}/><span>To Do</span></span>;
    }
  };

  return (
    <div className="kanban">
      <div className='control-panel'>
        <ControlPanel setGrouping={setGrouping} setSorting={setSorting} sorting={sorting} grouping={grouping}/>
        </div>

      <div className='kanban-board'>
        {grouping == "Users"?
      Object.keys(groupedTickets).map(item => (
        <div className="kanban-column" key={item}>
        <h2 style={{display:"flex", justifyContent:"space-between", fontSize:"20px"}}>{users.filter(user => user.id === item).map(user => user.name)}<span ><img src={addImg} alt="" /><img src={dotImg} alt="" /></span></h2>
          {groupedTickets[item].map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} grouping={grouping} />
          ))}
        </div>
      )):(grouping == "Status")?
      Object.keys(groupedTickets).map(item => (
        <div className="kanban-column" key={item}>
          <h2 style={{display:"flex", justifyContent:"space-between"}}>{ getStatusText(item)}<span style={{}}><img src={addImg} alt="" /><img src={dotImg} alt="" /></span></h2>
          {groupedTickets[item].map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} grouping={grouping} />
          ))}
        </div> 
      )):
      Object.keys(groupedTickets).map(item => (
        <div className="kanban-column" key={item}>
          <h2 style={{display:"flex", justifyContent:"space-between"}}>{getPriorityText(item)}<span style={{}}><img src={addImg} alt="" /><img src={dotImg} alt="" /></span></h2>
          {groupedTickets[item]
              .sort((a, b) => b.priority - a.priority)
              .map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} grouping={grouping} />
              ))}
        </div> 
      ))
      
      }</div>
    </div>
  );
};

export default KanbanBoard;
