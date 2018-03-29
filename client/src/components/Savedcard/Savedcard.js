import React from "react";

export const Savedcard = props =>

<div class="row savedResult">
  <div class="col-md-12">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{props.date}</h6>
        <p>{props.snippet}</p>
        <a href={props.url} target="_blank">View Article</a>
        <button type="button" class="btn btn-outline-danger float-right" {...props}>Delete</button>
      </div>
    </div>
  </div>
</div>
