// Contexto
class DocumentContext{
    
    constructor(){
        this.state = new BlankState();
        this.content = "";
    }

    setState(state){
        this.state = state;
    }

    write(text){
        this.state.write(this, text);
    }
    

}

// State en blanco
class BlankState{
    write(documentContext, text){
        documentContext.content = text;
        documentContext.setState(new WithContentState());
    }
}
// State con contenido
class WithContentState{
    write(documentContext, text){
        documentContext.content += " " + text;
    }
}

// State aprobado
class ApprovedState{
    write(documentContext, text){
        console.log("Documento aprobado ya no se modifica");
    }
}

// utilización del patrón de diseño State
const doc = new DocumentContext();
console.log(doc.state);
doc.write("pato");
console.log(doc.content);
console.log(doc.state);

doc.write("ALGO");
doc.write("MÁS");
console.log(doc.content);

doc.setState(new ApprovedState());
console.log(doc.state);
console.log(doc.content);

doc.write("ALGO");

doc.setState(new WithContentState());
console.log(doc.state);
doc.write("No que no");
console.log(doc.content);