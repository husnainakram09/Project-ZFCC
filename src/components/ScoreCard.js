import React, { useContext } from 'react'
import { TeamAContext } from '../ContextApi/GlobalState'
export default function ScoreCard() {

    const { players } = useContext(TeamAContext)

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Batting</td>
                        <td>R</td>
                        <td>B</td>
                        <td>4s</td>
                        <td>6s</td>
                        <td>S/R</td>
                    </tr>
                </thead>
                <tbody>
                    {players.map((v, i) => {
                        return (

                            <tr key={i}>
                                <td>{v}</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
