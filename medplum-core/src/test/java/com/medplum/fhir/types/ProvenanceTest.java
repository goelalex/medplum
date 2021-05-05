/*
 * Generated by com.medplum.generator.Generator
 * Do not edit manually.
 */

package com.medplum.fhir.types;

import static org.junit.jupiter.api.Assertions.*;

import jakarta.json.Json;

import org.junit.Test;

public class ProvenanceTest {

    @Test
    public void testConstructor() {
        assertNotNull(new Provenance(Json.createObjectBuilder().build()));
    }

    @Test
    public void testBuilderFromJsonObject() {
        assertNotNull(Provenance.create(Json.createObjectBuilder().build()).build());
    }

    @Test
    public void testResourceType() {
        assertEquals("x", Provenance.create().resourceType("x").build().resourceType());
    }

    @Test
    public void testId() {
        assertEquals("x", Provenance.create().id("x").build().id());
    }

    @Test
    public void testMeta() {
        final Meta value = Meta.create().build();
        assertEquals(value, Provenance.create().meta(value).build().meta());
    }

    @Test
    public void testImplicitRules() {
        final java.net.URI value = java.net.URI.create("https://www.example.com");
        assertEquals(value, Provenance.create().implicitRules(value).build().implicitRules());
    }

    @Test
    public void testLanguage() {
        assertEquals("x", Provenance.create().language("x").build().language());
    }

    @Test
    public void testText() {
        final Narrative value = Narrative.create().build();
        assertEquals(value, Provenance.create().text(value).build().text());
    }

    @Test
    public void testContained() {
        final java.util.List<FhirResource> value = java.util.Collections.emptyList();
        assertEquals(value, Provenance.create().contained(value).build().contained());
    }

    @Test
    public void testExtension() {
        final java.util.List<Extension> value = java.util.Collections.emptyList();
        assertEquals(value, Provenance.create().extension(value).build().extension());
    }

    @Test
    public void testModifierExtension() {
        final java.util.List<Extension> value = java.util.Collections.emptyList();
        assertEquals(value, Provenance.create().modifierExtension(value).build().modifierExtension());
    }

    @Test
    public void testTarget() {
        final java.util.List<Reference> value = java.util.Collections.emptyList();
        assertEquals(value, Provenance.create().target(value).build().target());
    }

    @Test
    public void testOccurredPeriod() {
        final Period value = Period.create().build();
        assertEquals(value, Provenance.create().occurredPeriod(value).build().occurredPeriod());
    }

    @Test
    public void testOccurredDateTime() {
        assertEquals("x", Provenance.create().occurredDateTime("x").build().occurredDateTime());
    }

    @Test
    public void testRecorded() {
        final java.time.Instant value = java.time.Instant.now();
        assertEquals(value, Provenance.create().recorded(value).build().recorded());
    }

    @Test
    public void testPolicy() {
        final java.util.List<java.net.URI> value = java.util.Collections.emptyList();
        assertEquals(value, Provenance.create().policy(value).build().policy());
    }

    @Test
    public void testLocation() {
        final Reference value = Reference.create().build();
        assertEquals(value, Provenance.create().location(value).build().location());
    }

    @Test
    public void testReason() {
        final java.util.List<CodeableConcept> value = java.util.Collections.emptyList();
        assertEquals(value, Provenance.create().reason(value).build().reason());
    }

    @Test
    public void testActivity() {
        final CodeableConcept value = CodeableConcept.create().build();
        assertEquals(value, Provenance.create().activity(value).build().activity());
    }

    @Test
    public void testAgent() {
        final java.util.List<Provenance.ProvenanceAgent> value = java.util.Collections.emptyList();
        assertEquals(value, Provenance.create().agent(value).build().agent());
    }

    @Test
    public void testEntity() {
        final java.util.List<Provenance.ProvenanceEntity> value = java.util.Collections.emptyList();
        assertEquals(value, Provenance.create().entity(value).build().entity());
    }

    @Test
    public void testSignature() {
        final java.util.List<Signature> value = java.util.Collections.emptyList();
        assertEquals(value, Provenance.create().signature(value).build().signature());
    }
}