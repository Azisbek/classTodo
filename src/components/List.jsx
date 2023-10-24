import React, { Component } from "react";
import styled from "styled-components";

class List extends Component {
  render() {
    return (
      <div>
        {this.props.data.map((el) => {
          return <StyledTagP>{el.title}</StyledTagP>;
        })}
      </div>
    );
  }
}
const StyledTagP = styled.p`
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  font-size: 25px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 600;
`;

export default List;
