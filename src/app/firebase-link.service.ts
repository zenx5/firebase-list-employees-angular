import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, onSnapshot, doc, deleteDoc, updateDoc, Firestore  } from 'firebase/firestore'
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments'
import { EmployeeType } from 'src/assets/type';

@Injectable({
  providedIn: 'root'
})
export class FirebaseLinkService {

  database!:Firestore
  employees!:Array<EmployeeType>
  public employee!:EmployeeType

  onEditCallback!:Function

  constructor() {
    const firebaseConfig = {
      apiKey: environment.firebase.apiKey,
      authDomain: environment.firebase.authDomain,
      projectId: environment.firebase.projectId,
      storageBucket: environment.firebase.storageBucket,
      messagingSenderId: environment.firebase.messagingSenderId,
      appId: environment.firebase.appId,
    }
    const app = initializeApp(firebaseConfig)
    this.database = getFirestore()

  }

  onEdit( employee:EmployeeType ) {
    this.onEditCallback( employee )
  }

  onSnapshot( callback:Function ){
    onSnapshot(collection(this.database, "employees"), snap => {
      this.employees = snap.docs.map(doc => ({
        id: doc.id,
        name: doc.data()['name'],
        position: doc.data()['position']
      }))
      callback( this.employees )
    })
  }

  async saveItem(id:string, name:string, position:string) {
    try{
      const action = id ? updateDoc : addDoc
      const collectionInstance:any = id ? doc(this.database, "employees", id) : collection(this.database, "employees")
      await action(collectionInstance,{
        name,
        position
      })
    } catch( error ) {
      console.log( error )
    }
  }

  async deleteItem(id:string){
    try{
      await deleteDoc(
        doc(this.database, "employees", id)
      )
    } catch( error ) {
      console.log( error )
    }
  }

  editItem(id:string) {
    const tempEmployee = this.employees.find( employee => employee.id==id )
    if( tempEmployee ) {
      this.employee = tempEmployee
      this.onEdit( this.employee )
    }
  }
}
