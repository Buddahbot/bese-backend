PGDMP     2    '                z           besedo    14.4    14.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16671    besedo    DATABASE     [   CREATE DATABASE besedo WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE besedo;
                postgres    false            �            1259    16672 	   customers    TABLE     �   CREATE TABLE public.customers (
    customer_id integer NOT NULL,
    name character varying,
    email character varying,
    town character varying,
    country character varying
);
    DROP TABLE public.customers;
       public         heap    postgres    false            �          0    16672 	   customers 
   TABLE DATA           L   COPY public.customers (customer_id, name, email, town, country) FROM stdin;
    public          postgres    false    209   �       g           2606    16678    customers customers_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (customer_id);
 B   ALTER TABLE ONLY public.customers DROP CONSTRAINT customers_pkey;
       public            postgres    false    209            �   q   x�%�;
�@Dk�9�!$�}��iF^�$;����ǻ)f��1�Ny��ښV��0�N'D��a��W�QB�?����P�������(��Gl����Kt�b����-�     