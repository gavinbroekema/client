import React from "react";
import { Link } from "react-router-dom";

export default function Course(props) {
  return (
          <Link class="course--module course--link" to={{pathname: `courses/${props.id}`}}>
            <h2 class="course--label">Course</h2>
            <h3 class="course--title">{props.title}</h3>
          </Link>

  );
}
