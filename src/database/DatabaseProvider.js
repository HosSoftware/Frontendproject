import React, {useContext, useState, useEffect} from "react"
import {db, dbRef, destinationsRef, newDestinationRef} from "../Firebase";
import {set, get, query, ref, orderByKey, remove} from "firebase/database";

export default class DatabaseProvider {

    static async addText(text) {
        const value = {
            "title": text,
            complete: false
        }
        return set(dbRef, value)
    }

    static async addDestination(destination) {
        const id = Date.now()
        const r = "destinations/" + id + "/"
        console.log(r)
        destination.id = id
        return set(ref(db, r), destination)
    }

    static async get(query) {
        return get(query)
    }

    static async getDestinations() {
        const query = ref(db, "destinations")
        return get(query)
    }

    static async deleteDestination(id) {
        const r = "destinations/" + id + "/"
        const query = ref(db, r)
        return remove(query)
    }


}