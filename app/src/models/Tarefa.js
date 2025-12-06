import mongoose from 'mongoose';
  
const tarefaSchema = new mongoose.Schema({ 
    titulo: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                // Não permite o título "Tarefa" 
                return v.toLowerCase() !== "tarefa";
            },
            message: props => `${props.value} não é um título válido!`
        }
    },
    concluida: { 
        type: Boolean, 
        default: false, 
        index: true 
    },
    prioridade: {
        type: String,
        required: true,
        enum: ["Baixa", "Média", "Alta"],
        default: "Baixa",
        index: true
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario', // Referencia o Model 'Usuario' 
        required: true
    },
    anexo: { type: String }, 
    anexos: [{ type: String }]

}, { 
    timestamps: true // Adiciona createdAt e updatedAt automaticamente
});

const Tarefa = mongoose.model('Tarefa', tarefaSchema);
export default Tarefa;