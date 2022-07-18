import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false, //me dice si estoy salvando o no
        messageSaved: '',
        notes:[],
        active:null,

    //todo lo que se coloque en los reducer tiene que ser trabajo async    
    },
    reducers: {

        savingNewNote: (state) =>{

            state.isSaving = true;

        },

        addNewEmptyNote:(state,action)=>{

            state.notes.push(action.payload);
            state.isSaving = false;

        },
        setActiveNote:(state,action)=>{

            state.active = action.payload;
            state.messageSaved= '';

        },
        setNotes:(state,action)=>{
            state.notes = action.payload;
        },
        setSaving:(state)=>{
            state.isSaving=true;
            state.messageSaved='';
            
        },
        updateNote:(state,action)=>{
//map regresa un nuevo arreglo basado en otro arreglo en este caso notes, barre cada uno de los elemntos del arreglo y regresa lo que sea que se retorne
            state.isSaving = false;
            state.notes = state.notes.map( note=>{
                //si el id es igual al payload.id, significa que es la nota actualizada
                if( note.id === action.payload.id){
                    return action.payload;
                }

                return note;
            });
            state.messageSaved =`${action.payload.title}, actualizada correctamente`
        },

        setPhotosToActiveNote: (state, action)=>{
            state.active.imageUrls =[...state.active.imageUrls, ...action.payload];//preservamos las anteriores imagenes y preservamos las nuevas
            state.isSaving = false; //terminamos la carga y podemos cargar mas imagenes
        },
        
        clearNotesLogout:(state)=>{
            state.isSaving = false;
            state.messageSaved= '';
            state.notes= [];
            state.active=null;
        },

        deleteNoteById:(state,action)=>{
            state.active = null;
            state.notes = state.notes.filter(note => note.id  !== action.payload);
        
        },
    }
});

//Estas son las acciones que voy a llamar para caer en los reducers
export const {
    addNewEmptyNote,
    clearNotesLogout,
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNotes,
    setPhotosToActiveNote,
    setSaving,
    updateNote,

} = journalSlice.actions;

//revisado
//los reducers no deben disparar funciones de tercero.