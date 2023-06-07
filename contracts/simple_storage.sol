//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Simple_Storage {
    uint256 fav_num;

    struct People {
        uint256 favnum;
        string name;
    }

    People[] public people;
    mapping(string => uint256) public nameTofn;

    function store(uint256 favnum) public {
        fav_num = favnum;
    }

    function retrieve() public view returns (uint256) {
        return fav_num;
    }

    function addppl(string memory n, uint256 fn) public {
        people.push(People(fn, n));
        nameTofn[n] = fn;
    }
}
