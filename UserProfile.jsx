import React from 'react'
import { Users } from './Users';
import { Gopika } from './Gopika';
import { Mahesh } from './Mahesh';
export  function UserProfile() {
  return (
    <div>
        <div>
            <Users username="madhusai"/>
            <Gopika heart=" I LOVE YOU Jaagurthi "/>
            <span>welcome to my world to know how to develop your skills .</span>
            <Mahesh mahesh="MY best one in college life"/>
            <div>
                <span>Food items i like  to in early morning in everyday.</span>
                <ul>

                    <li>dosa</li>
                    <li>pogal</li>
                    <li>upma</li>
                </ul>
            </div>
        </div>
    </div>

  );
}
