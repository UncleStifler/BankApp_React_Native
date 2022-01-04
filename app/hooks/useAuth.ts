import React, {useContext} from 'react';
import {AuthContext} from "../AuthProvider";

export const useAuth = () => useContext(AuthContext)
