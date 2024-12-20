// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol";

contract NFTMarketplace is ERC721URIStorage{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;
    uint256 listingPrice = 0.0025 ether;
    address payable owner;
    mapping (uint256 => MarketItem) private idMarketItem;

    struct MarketItem{
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }
    event MarketItemCreated(
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );
    modifier onlyOwner{
        require(msg.sender == owner, "Only the owner can perform this action");
          ;
    }
    constructors() ERC721("NFT Emporium Token","MYNFT"){
        owner == payable(msg.sender);
           
    }
    function updateListingPrice(uint256 _listingPrice) public payable onlyOwner{
        listingPrice = _listingPrice;
    }
    function getListingPrice() public view returns (uint256){
        return listingPrice;
    }
    //Create NFT Token function

    function createToken(string memory tokenURI,uint256 price)public payable returns (uint256){
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _mint(msg.sender,newTokenId);
        _setTokenURI(newTokenId,tokenURI);

        createMarketItem(newTokenId,price);
        return newTokenId;
    }
}