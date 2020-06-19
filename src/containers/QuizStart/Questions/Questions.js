import React, { Component } from "react";
import classes from "./Questions.module.css";

class Questions extends Component {
  state = {
    myAnswer: "fuck you",
  };

  someFn = () => {
    this.props.click(this.state.myAnswer);
  };

  render() {
    return (
      <div className={classes.Container}>
        <div className={classes.QuestionNumber}>
          Question {this.props.questionNumber + 1}
        </div>
        <section>Click on the correct answer!</section>
        <div className={classes.QuestionContainer}>
          <div>{this.props.Question}</div>
        </div>
        <div className={classes.OptionContainer}>
          <button
            onClick={() =>
              this.setState(
                {
                  myAnswer: 1,
                },
                this.someFn
              )
            }
          >
            {this.props.Answer1}
          </button>
        </div>
        <div className={classes.OptionContainer}>
          <button
            onClick={() =>
              this.setState(
                {
                  myAnswer: 2,
                },
                this.someFn
              )
            }
          >
            {this.props.Answer2}
          </button>
        </div>
        <div className={classes.OptionContainer}>
          <button
            onClick={() =>
              this.setState(
                {
                  myAnswer: 3,
                },
                this.someFn
              )
            }
          >
            {this.props.Answer3}
          </button>
        </div>
        <div className={classes.OptionContainer}>
          <button
            onClick={() =>
              this.setState(
                {
                  myAnswer: 4,
                },
                this.someFn
              )
            }
          >
            {this.props.Answer4}
          </button>
        </div>
      </div>
    );
  }
}

export default Questions;
