import React from 'react';

export default function Chat(props) {
  return (
    <section className='Chat-participant'>
        <img src={props.avatar} alt={props.name} className="user-avatar"></img>
        <div className="participant-info-text">
            <h6 className="participant-name">{props.name}</h6>
            <div className="participant-status">{props.inSession ? "in session" : "not in session"}</div>
            <div className="participant-status">{props.onStage ? "on stage" : "not on stage"}</div>
        </div>
    </section>
  )
}

{/* <img src="./Thinkful Sessions_files/f82fec48edfb88842f2f488b044399c1" alt="Donald Sonn" class="user-avatar">
<div class="participant-info">
<h6 class="participant-name">Donald Sonn</h6>
<div class="participant-status participant-status__green">
<!-- react-text: 89 -->in session<!-- /react-text -->
</div></div></div></div></div> */}
