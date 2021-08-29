using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ACME_Token_Mgmt_BackEnd.DTOs;
using ACME_Token_Mgmt_BackEnd.Entities;
using AutoMapper;

namespace ACME_Token_Mgmt_BackEnd.helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Token, TokenDTO>()
            .ForMember(dest => dest.token, opt => opt.MapFrom(src => src.token))
            .ForMember(dest => dest.expiry, opt => opt.MapFrom(src => src.ExpiryDate.ToString("dddd, dd MMMM yyyy h:mm tt")))
            .ForMember(dest => dest.active, opt => opt.MapFrom(src => src.Active));
            //.ForMember(dest => dest.expired, opt => opt.MapFrom(src => src.Expired));
        }
    }
}
