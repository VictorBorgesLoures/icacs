import { ChangeEvent, Component, FormEvent } from "react";
import enums, {InterfaceCapitulo, InterfaceSecao} from '../../../components/enums';

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
            }
        };
    }

    setVersao(event: ChangeEvent): void {
        event.preventDefault();
        if(event.currentTarget.value) {
            this.setState({versao: {
                ...this.state.versao,
                value: event.currentTarget.value
            },
            capitulo: {
                value:"",
                disabled: false
            }
            });
        } else {
            this.setState({
                capitulo: {
                    value:"",
                    disabled: true
                },
                secao: {
                    value: "",
                    disabled: true
                },
                versao: {
                ...this.state.versao,
                value: event.currentTarget.value
                }          
            
            });
        }
    }

    setCapitulo(event: ChangeEvent): void {
        event.preventDefault();
        if(event.currentTarget.value) {
            this.setState({capitulo: {
                ...this.state.capitulo,
                value: event.currentTarget.value
            },
            secao: {
                value:"",
                disabled: false
            }
            });
        }else {
            this.setState({capitulo: {
                ...this.state.capitulo,
                value: event.currentTarget.value
            },
            secao: {
                value:"",
                disabled: true
            }
            });
        }
    }

    buildCapitulo() {
        if(this.state.versao.value) {
            return enums[this.state.versao.value].capitulo.map((e: InterfaceCapitulo , index: number) => {
                return <option key={"level-"+index} value={e.nome}>{e.nome}</option>
            })
        }
        return <></> ;
    }

    setSecao(event: ChangeEvent): void {
        event.preventDefault();
        this.setState({secao: {
            ...this.state.secao,
            value: event.currentTarget.value
        }
        });
    }

    buildSecao() {
        if(this.state.versao.value) {
            return enums[this.state.versao.value].capitulo.map((e: InterfaceCapitulo, index: number) => {
                if(e.nome == this.state.capitulo.value) {
                    return e.secao.map((e: InterfaceSecao , index: number) => {
                        return <option key={"level-"+index} value={e.nome}>{e.nome}</option>
                    })
                }
            });
        }
        return <></>;
    }

    buildRequisitosTableData() {
        if(this.state.secao.value) {
            return enums[this.state.versao.value].capitulo.map((e: InterfaceCapitulo, index: number) => {
                if(e.nome == this.state.capitulo.value) {
                    return e.secao.map((item: InterfaceSecao , index: number) => {
                        if(item.nome == this.state.secao.value) {
                            return item.requisito.map((v: string , index: number) => {
                                return <tr key={"tr-"+index}>
                                    <td key={"td-"+index}>{v}</td>
                                </tr>
                            })
                        }
                    })
                }
            });
        }
        return <></>;
    }

    buildRequisitos() {
        return (
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Lista dos Requisitos</th>
                    </tr>
                </thead>
                <tbody>
                    {this.buildRequisitosTableData()}
                </tbody>
                </table>
        )
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
                <h2>Listar Requisitos</h2>
                    <div className="mb-3">     
                        <label htmlFor="versao" className="form-label">Versao:</label>
                        <select className="form-select" id="versao" value={this.state.versao.value} onChange={event => this.setVersao(event)} disabled={this.state.versao.disabled}>
                            <option value="">Selecionar</option>
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
                            <option value="">Selecionar</option>
                            {this.buildCapitulo()}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="secao" className="form-label">Secao:</label>
                        <select className="form-select" value={this.state.secao.value} onChange={event => this.setSecao(event)} disabled={this.state.secao.disabled}>
                            <option value="">Selecionar</option>
                            {this.buildSecao()}
                        </select>
                    </div>
                    {this.buildRequisitos()}
            </div>
        </>)
    }
}