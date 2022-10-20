// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract MintContract is ERC721, Ownable, ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    uint256 public maxSupply;
    uint256 public totalSupply;

    string internal baseTokenURI;


    constructor() ERC721("DevFest LK", "DEVLK") {
        totalSupply = 0;
        maxSupply = 500;
    }

    function setBaseTokenURI(string calldata baseTokenURI_) external onlyOwner{
        baseTokenURI = baseTokenURI_;
    }

    function tokenURI(uint256 tokenId_) public view override returns (string memory){
        require(_exists(tokenId_), "Token does not exist");
        return string(abi.encodePacked(baseTokenURI, Strings.toString(tokenId_), ".json"));
    }

    function _mintToken() internal returns(uint256){
        require(totalSupply + 1 <= maxSupply, 'Max supply exceeded!');
        _tokenIds.increment();
        totalSupply++;
        return _tokenIds.current();
    }

    function createToken() external {
        _safeMint(msg.sender, _mintToken());
    }

    function createAdminToken(address adminAddress) external onlyOwner {
        _safeMint(adminAddress, _mintToken(), "Admin");
    }
}
