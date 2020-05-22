import React from "react";

function ApprovalCard(props) {
  return (
    <div className="ui-card">
      <div className="content">
        {props.children}
        <div className="extra content">
          <div class="ui basic green button">Approve</div>
          <div class="ui basic red button">Decline</div>
        </div>
      </div>
    </div>
  );
}

export default ApprovalCard;
