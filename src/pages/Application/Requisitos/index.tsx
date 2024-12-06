import { ChangeEvent, Component, FormEvent } from "react";
import enums from '../../../components/enums';

interface AppState  {
    versao: {
        value:string,
        disabled: boolean
    },
    capitulo: {
        value:string,
        disabled: boolean
    },
    secao: {
        value: string,
        disabled: boolean
    },
    descricao: {
        value: string,
        disabled: boolean
    },
    level: {
        value: string,
        disabled: boolean
    }
}

export default class Requisitos extends Component<any, AppState> {

    constructor(props: any) {
        super(props);

        this.state = {
            versao:  {
                value: "",
                disabled: false
            },
            capitulo: {
                value: "",
                disabled: true
            },
            secao: {
                value: "",
                disabled: true
            },
            descricao: {
                value: "",
                disabled: false
            },
            level: {
                value: "",
                disabled: true
            }
        };
    }

    setVersao(event: ChangeEvent) {
        event.preventDefault();
        this.setState({versao: {
            ...this.state.versao,
            value: event.currentTarget.value
        },
        capitulo: {
            value:"",
            disabled: false
        },
        level: {
            value:"",
            disabled: false
        },
        secao: {
            value:"",
            disabled: false
        }
        });
    }

    setLevel(event: ChangeEvent) {
        event.preventDefault();
        this.setState({level: {
            ...this.state.level,
            value: event.currentTarget.value
        }
        });
    }

    buildLevel() {
        if(this.state.versao.value) {
            return enums[this.state.versao.value].level.map((e, index) => {
                return <option key={"level-"+index} value={e}>{e}</option>
            })
        }
        return <></>;
    }   

    setCapitulo(event: ChangeEvent) {
        event.preventDefault();
        this.setState({capitulo: {
            ...this.state.capitulo,
            value: event.currentTarget.value
        }
        });
    }

    buildCapitulo() {
        if(this.state.versao.value) {
            return enums[this.state.versao.value].capitulo.map((e, index) => {
                return <option key={"level-"+index} value={e}>{e}</option>
            })
        }
        return <></>;
    }

    setSecao(event: ChangeEvent) {
        event.preventDefault();
        this.setState({secao: {
            ...this.state.secao,
            value: event.currentTarget.value
        }
        });
    }

    buildSecao() {
        if(this.state.versao.value) {
            return enums[this.state.versao.value].secao.map((e, index) => {
                return <option key={"level-"+index} value={e}>{e}</option>
            })
        }
        return <></>;
    }

    setDescricao(event: ChangeEvent) {
        event.preventDefault();
        this.setState({descricao: {...this.state.descricao,
            value: event.currentTarget.value
        }});
    }

    handleSubmit(e: FormEvent) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        let versoes: string[] = [];
        Object.keys(enums).forEach(function(key) {
            versoes.push(key);
            });
            console.log(enums);
        return (<>
            <h1>Requisitos</h1>
            <div className="container">
                <h2>Requisitos</h2>
                <form className="form" onSubmit={event => this.handleSubmit(event)}>
                    <div className="mb-3">
                        <label htmlFor="descricao" className="form-label">Descricao:</label>
                        <input type="text" className="form-control" value={this.state.descricao.value} onChange={event => this.setDescricao(event)} id="descricao" placeholder="Digite a descrição" />
                    </div>
                    <div className="mb-3">     
                        <label htmlFor="versao" className="form-label">Versao:</label>
                        <select className="form-select" id="versao" value={this.state.versao.value} onChange={event => this.setVersao(event)} disabled={this.state.versao.disabled}>
                            <option value="0">Selecionar</option>
                            {
                                
                                versoes.map((v, index) => {
                                    return <option value={v} key={"capitulo-"+index}>{v}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="mb-3">     
                        <label htmlFor="capitulo" className="form-label">Capitulo:</label>
                        <select className="form-select" id="capitulo" value={this.state.capitulo.value} onChange={event => this.setCapitulo(event)} disabled={this.state.capitulo.disabled}>
                            <option value="0">Selecionar</option>
                            {this.buildCapitulo()}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="level" className="form-label">Level:</label>
                        <select className="form-select" id="level" value={this.state.level.value} onChange={event => this.setLevel(event)} disabled={this.state.level.disabled}>
                            <option value="0">Selecionar</option>
                            {this.buildLevel()}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="secao" className="form-label">Secao:</label>
                        <select className="form-select" value={this.state.secao.value} onChange={event => this.setSecao(event)} disabled={this.state.secao.disabled}>
                            <option value="0">Selecionar</option>
                            {this.buildSecao()}
                        </select>
                    </div>
                    
                    <button type="submit" className="btn btn-info">Enviar</button>
                </form>
            </div>
        </>)
    }
}