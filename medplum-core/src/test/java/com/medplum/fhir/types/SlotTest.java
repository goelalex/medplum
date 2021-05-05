/*
 * Generated by com.medplum.generator.Generator
 * Do not edit manually.
 */

package com.medplum.fhir.types;

import static org.junit.jupiter.api.Assertions.*;

import jakarta.json.Json;

import org.junit.Test;

public class SlotTest {

    @Test
    public void testConstructor() {
        assertNotNull(new Slot(Json.createObjectBuilder().build()));
    }

    @Test
    public void testBuilderFromJsonObject() {
        assertNotNull(Slot.create(Json.createObjectBuilder().build()).build());
    }

    @Test
    public void testResourceType() {
        assertEquals("x", Slot.create().resourceType("x").build().resourceType());
    }

    @Test
    public void testId() {
        assertEquals("x", Slot.create().id("x").build().id());
    }

    @Test
    public void testMeta() {
        final Meta value = Meta.create().build();
        assertEquals(value, Slot.create().meta(value).build().meta());
    }

    @Test
    public void testImplicitRules() {
        final java.net.URI value = java.net.URI.create("https://www.example.com");
        assertEquals(value, Slot.create().implicitRules(value).build().implicitRules());
    }

    @Test
    public void testLanguage() {
        assertEquals("x", Slot.create().language("x").build().language());
    }

    @Test
    public void testText() {
        final Narrative value = Narrative.create().build();
        assertEquals(value, Slot.create().text(value).build().text());
    }

    @Test
    public void testContained() {
        final java.util.List<FhirResource> value = java.util.Collections.emptyList();
        assertEquals(value, Slot.create().contained(value).build().contained());
    }

    @Test
    public void testExtension() {
        final java.util.List<Extension> value = java.util.Collections.emptyList();
        assertEquals(value, Slot.create().extension(value).build().extension());
    }

    @Test
    public void testModifierExtension() {
        final java.util.List<Extension> value = java.util.Collections.emptyList();
        assertEquals(value, Slot.create().modifierExtension(value).build().modifierExtension());
    }

    @Test
    public void testIdentifier() {
        final java.util.List<Identifier> value = java.util.Collections.emptyList();
        assertEquals(value, Slot.create().identifier(value).build().identifier());
    }

    @Test
    public void testServiceCategory() {
        final java.util.List<CodeableConcept> value = java.util.Collections.emptyList();
        assertEquals(value, Slot.create().serviceCategory(value).build().serviceCategory());
    }

    @Test
    public void testServiceType() {
        final java.util.List<CodeableConcept> value = java.util.Collections.emptyList();
        assertEquals(value, Slot.create().serviceType(value).build().serviceType());
    }

    @Test
    public void testSpecialty() {
        final java.util.List<CodeableConcept> value = java.util.Collections.emptyList();
        assertEquals(value, Slot.create().specialty(value).build().specialty());
    }

    @Test
    public void testAppointmentType() {
        final CodeableConcept value = CodeableConcept.create().build();
        assertEquals(value, Slot.create().appointmentType(value).build().appointmentType());
    }

    @Test
    public void testSchedule() {
        final Reference value = Reference.create().build();
        assertEquals(value, Slot.create().schedule(value).build().schedule());
    }

    @Test
    public void testStatus() {
        assertEquals("x", Slot.create().status("x").build().status());
    }

    @Test
    public void testStart() {
        final java.time.Instant value = java.time.Instant.now();
        assertEquals(value, Slot.create().start(value).build().start());
    }

    @Test
    public void testEnd() {
        final java.time.Instant value = java.time.Instant.now();
        assertEquals(value, Slot.create().end(value).build().end());
    }

    @Test
    public void testOverbooked() {
        assertEquals(true, Slot.create().overbooked(true).build().overbooked());
    }

    @Test
    public void testComment() {
        assertEquals("x", Slot.create().comment("x").build().comment());
    }
}