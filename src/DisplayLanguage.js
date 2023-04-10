import React from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
    en: {
        SELECTED_LNG: "English Selected"
    },
    tr: {
        SELECTED_LNG: "Türkçe Seçildi"
    }
}

export class DisplayLanguage extends React.Component{
    state = {
        Language: "en"
    }

    handleLanguageChange = (event) => {
        this.setState({
            Language: event.target.value
        })
    }

    render(){
        return(
            <div>
                <select value={this.state.Language} onChange={this.handleLanguageChange}>
                    <option value="en">ENGLISH</option>
                    <option value="tr">TÜRKÇE</option>
                </select>
                <LanguageContext.Provider value={this.state.Language}>
                    <LanguageContext.Consumer>
                        {Language => {
                            return(
                                <div>
                                    <h1>{Strings[Language].SELECTED_LNG}</h1>
                                </div>
                            )
                        }}
                    </LanguageContext.Consumer>
                </LanguageContext.Provider>
            </div>
        )
    }
}