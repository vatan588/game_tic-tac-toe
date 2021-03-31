import React from 'react'
import { Box } from './game-box'

import * as utils from '../utils/logic'

export class Game extends React.Component {
    constructor(props) {
    super(props)
        this.state = {
            boxes: Array(9).fill(null),
            history: [],
            xIsNext: true,
        }
    }
    handleBoxClick(index) {
        const boxes = this.state.boxes.slice()
        let history = this.state.history
        if (utils.findWinner(boxes) || boxes[index]) {
            return
        }
        if(utils.areAllBoxesChecked(boxes) === true) {
            return
        }
        boxes[index] = this.state.xIsNext ? 'x' : 'o'
        history.push(this.state.xIsNext ? 'x' : 'o')
        this.setState({
            boxes: boxes,
            history: history,
            xIsNext: !this.state.xIsNext
        })
    }

    handleGameRestart = () => {
        this.setState({
            boxes: Array(9).fill(null),
            history: [],
            xIsNext: true
        })
    }

    render() {
    const winner = utils.findWinner(this.state.boxes)
    const isFilled = utils.areAllBoxesChecked(this.state.boxes)
    let status;
        if (winner) {
            if (winner == "x"){
                status = `The winner is: Player 1!`
            } else {
                status = `The winner is: Player 2!`
            }
            
        } else if(!winner && isFilled) {
            status = 'Game drawn!'
        } else {
            status = `It is ${(this.state.xIsNext ? 'Player 1' : 'Player 2')}'s turn.`
        }
        let { boxes } = this.state

        return (
            <>
                <div className="game_wrapper">
                    <div className="board">
                        <h2 className="game_heading">{status}</h2>

                        <div className="game_row">
                            {boxes && boxes.map((item, index)=>{
                                return <Box value={boxes[index]} onClick={() => this.handleBoxClick(index)} />
                            })}
                            
                        </div>
                    </div>

                    {winner && <div className="game_footer">
                        <button className="btn" onClick={this.handleGameRestart}>Start New Game</button>
                    </div>}
                </div>
            </>
        )
    }
}